import { Controller, Get, Post, Delete, Body, Param, NotFoundException } from '@nestjs/common';
import { Roles } from '@/common/decorators/roles.decorator.js';
import { Role } from '../../generated/prisma/index.js';
import { UsersService } from './users.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';

@Controller('users')
@Roles(Role.ADMIN)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() dto: CreateUserDto) {
    const user = await this.usersService.create(dto);
    return { message: 'User created', data: { user } };
  }

  @Get()
  async findAll() {
    const users = await this.usersService.findAll();
    return { message: 'Users fetched', data: { users } };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const user = await this.usersService.findById(id);
    if (!user) throw new NotFoundException('User not found');
    return { message: 'User fetched', data: { user } };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const user = await this.usersService.findById(id);
    if (!user) throw new NotFoundException('User not found');
    await this.usersService.remove(id);
    return { message: 'User deleted' };
  }
}
