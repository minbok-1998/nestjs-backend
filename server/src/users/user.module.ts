import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { CUSTOMER } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CUSTOMER])],
  exports: [TypeOrmModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UserModule {}
