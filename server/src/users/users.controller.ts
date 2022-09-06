import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  RawBodyRequest,
  Req,
  Res,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { CUSTOMER } from './user.entity';
import { FastifyBodyParser, FastifyRequest } from 'fastify';

@Controller('/user')
export class UsersController {
  constructor(private UsersService: UsersService) {}

  @Get('/list')
  async getAllUsers(): Promise<CUSTOMER[]> {
    return await this.UsersService.getAllUsers();
  }

  @Post('/list')
  async addCustomer(@Body() customer: CUSTOMER): Promise<string> {
    await this.UsersService.addCustomer(customer);

    return Object.assign({
      data: { ...customer },
      statusCode: 201,
      statusMsg: '저장 성공',
    });
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
