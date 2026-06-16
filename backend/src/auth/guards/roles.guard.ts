import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '../../../generated/prisma/index.js';
import { ROLES_KEY } from '@/common/decorators/roles.decorator.js';
import { SafeUser } from '@/common/constants/safe-user.constant.js';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles || requiredRoles.length === 0) return true;

    const request = context.switchToHttp().getRequest();
    const user: SafeUser = request.user;

    if (!user) return false;

    // ADMIN passes every role check unconditionally
    if (user.role === Role.ADMIN) return true;

    return requiredRoles.includes(user.role);
  }
}
