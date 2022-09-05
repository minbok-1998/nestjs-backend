import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  SetMetadata,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserLoginDto } from './dto/user-login.dto';
import { UsersService } from './users.service';
import { request } from 'http';
import { CUSTOMER } from './user.entity';

@Controller('/user')
export class UsersController {
  constructor(private UsersService: UsersService) {}

  @Get('/list')
  getAllUsers(): Promise<CUSTOMER[]> {
    return this.UsersService.getAllUsers();
  }

  @Get()
  async getUser(): Promise<string> {
    // return this.UsersService.getHello();
    return '여기는 유저 라우터';
  }

  // @Get()
  // async test(): Promise<string> {
  //   throw new HttpException(
  //     {
  //       statusCode: 404,
  //       message: '에러발생!! 404',
  //     },
  //     403,
  //   );
  // }

  // @Get(':id')
  // async bingPipes(@Param('id', ParseIntPipe) id: number): Promise<string> {
  //   return `id ${id}`;
  // }

  //   custom pipes
  //   @Get(':id')
  //   async bingPipes(@Param('id', ValidationPipe) id: number): Promise<string> {
  //     return `id ${id}`;
  //   }

  // @SetMetadata()
  // @SetMetadata('test', ['minbok'])
  // @Get('/addmeta')
  // async addmetadata() {
  //   return 'ff';
  // }
}
