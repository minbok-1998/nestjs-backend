import {
  Body,
  Controller,
  Get,
  HttpException,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { VerifyEmailDto } from './dto/verify-email.dto';
import { UserLoginDto } from './dto/user-login.dto';
import { UsersService } from './users.service';
import { ValidationPipe } from '../validation.pipe';
// import { UserInfo } from './UserInfo';

@Controller()
export class UsersController {
  constructor(private UsersService: UsersService) {}
  @Get()
  async test(): Promise<string> {
    throw new HttpException(
      {
        statusCode: 404,
        message: '에러발생!! 404',
      },
      403,
    );
  }

  @Get(':id')
  async bingPipes(@Param('id', ParseIntPipe) id: number): Promise<string> {
    return `id ${id}`;
  }

  //   custom pipes
  //   @Get(':id')
  //   async bingPipes(@Param('id', ValidationPipe) id: number): Promise<string> {
  //     return `id ${id}`;
  //   }

  //   // 회원가입
  //   // ts : void는 결과 값을 반환하지 않는 함수에 설정
  //   @Post()
  //   async createUser(@Body() dto: CreateUserDto): Promise<CreateUserDto> {
  //     const { name, email, password } = dto;
  //     return dto;
  //     // await this.UsersService.createUser(name, email, password);
  //   }

  //   //   이메일 검증
  //   @Post('/email-verify')
  //   async verifyEmail(@Query() dto: VerifyEmailDto): Promise<string> {
  //     console.log(dto);
  //     return;
  //   }

  //   //   로그인
  //   @Post('/login')
  //   async login(@Body() dto: UserLoginDto): Promise<string> {
  //     console.log(dto);
  //     return;
  //   }

  //   //   고객 정보 가져오기
  //   @Get('/:id')
  //   async getUserInfo(@Param('id') userId: string): Promise<any> {
  //     console.log(userId);
  //     return;
  //   }
}
