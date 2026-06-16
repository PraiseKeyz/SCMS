import { Injectable } from '@nestjs/common';
import { hash } from 'argon2';
import { PrismaService } from '@/prisma/prisma.service.js';
import { SafeUserSelect } from '@/common/constants/safe-user.constant.js';
import { CreateUserDto } from './dto/create-user.dto.js';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.user.findMany({ select: SafeUserSelect });
  }

  findById(id: string) {
    return this.prisma.user.findUnique({ where: { id }, select: SafeUserSelect });
  }

  async create(dto: CreateUserDto) {
    const hashedPassword = await hash(dto.password);
    return this.prisma.user.create({
      data: { name: dto.name, email: dto.email, role: dto.role, password: hashedPassword },
      select: SafeUserSelect,
    });
  }

  remove(id: string) {
    return this.prisma.user.delete({ where: { id } });
  }
}
