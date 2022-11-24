import { Module } from '@nestjs/common';
import { UsersConroller } from './users.controller';

@Module({
  controllers: [UsersConroller],
})
export class UsersModule {}
