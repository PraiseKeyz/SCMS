import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { verify, hash } from 'argon2';
import { PrismaService } from '@/prisma/prisma.service.js';
import { SafeUserSelect } from '@/common/constants/safe-user.constant.js';
import type { SafeUser } from '@/common/constants/safe-user.constant.js';
import { LoginDto } from './dto/login.dto.js';
import { ChangePasswordDto } from './dto/change-password.dto.js';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
      select: { ...SafeUserSelect, password: true },
    });

    if (!user) throw new UnauthorizedException('Invalid credentials');

    const passwordValid = await verify(user.password, dto.password);
    if (!passwordValid) throw new UnauthorizedException('Invalid credentials');

    const { password: _password, ...safeUser } = user;

    const accessToken = await this.jwtService.signAsync({
      sub: safeUser.id,
      role: safeUser.role,
    });

    return { message: 'Login successful', data: { user: safeUser, accessToken } };
  }

  getMe(user: SafeUser) {
    return { message: 'Profile fetched', data: { user } };
  }

  async changePassword(userId: string, dto: ChangePasswordDto) {
    const record = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { password: true },
    });

    if (!record) throw new UnauthorizedException();

    const currentValid = await verify(record.password, dto.currentPassword);
    if (!currentValid) throw new UnauthorizedException('Current password is incorrect');

    const hashedPassword = await hash(dto.newPassword);
    await this.prisma.user.update({
      where: { id: userId },
      data: { password: hashedPassword },
    });

    return { message: 'Password updated successfully' };
  }
}
