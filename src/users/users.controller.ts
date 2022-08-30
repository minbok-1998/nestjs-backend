import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { UserInfo } from 'os';
import { CreateUserDto, VerifyEmailDto } from './dto/create-user.dto';
// import { UserInfo } from './UserInfo';

@Controller('/users')
export class UsersController {
  // 회원가입
  // ts : void는 결과 값을 반환하지 않는 함수에 설정
  @Post()
  async createUser(@Body() dto: CreateUserDto): Promise<void> {
    console.log(dto);
  }

  //   이메일 검증
  @Post('/email-verify')
  async verifyEmail(@Query() dto: VerifyEmailDto): Promise<string> {
    console.log(dto);
    return;
  }

  //   로그인
  @Post('/login')
  async login(@Body() dto: VerifyEmailDto): Promise<string> {
    console.log(dto);
    return;
  }

  //   고객 정보 가져오기
  @Get('/:id')
  async getUserInfo(@Param('id') userId: string): Promise<any> {
    console.log(userId);
    return;
  }
}
