import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { User, Bookmark } from '@prisma/client';
@Module({
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
