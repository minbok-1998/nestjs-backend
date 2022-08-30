import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('/users')
export class UsersController {
  // 회원가입
  @Get()
  async test(): Promise<string> {
    return 'hello world';
  }

  // ts : void는 결과 값을 반환하지 않는 함수에 설정
  @Post()
  async createUser(@Body() dto: CreateUserDto): Promise<any> {
    console.log(dto);
    return dto;
  }
}
