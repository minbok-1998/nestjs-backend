import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SignupController } from './signup.controller';
import { SIGNUP } from './signup.entity';
import { SignupService } from './signup.service';

@Module({
  imports: [TypeOrmModule.forFeature([SIGNUP])],
  exports: [TypeOrmModule],
  controllers: [SignupController],
  providers: [SignupService],
})
export class SignupModule {}
