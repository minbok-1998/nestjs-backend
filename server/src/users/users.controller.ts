import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Render,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CUSTOMER } from './user.entity';

@Controller('/user')
export class UsersController {
  constructor(private UsersService: UsersService) {}

  // @Get('/list')
  // async getAllUsers(): Promise<CUSTOMER[]> {
  //   return await this.UsersService.getAllUsers();
  // }

  @Get('/list')
  @Render('index')
  async root() {
    const result = await this.UsersService.getAllUsers();
    return { customer: result };
  }

  // 고객 정보 추가
  @Post('/list')
  async addCustomer(@Body() customer: CUSTOMER): Promise<CUSTOMER> {
    return await this.UsersService.addCustomer(customer);
  }

  // 고객 정보 수정
  @Put(':id')
  async updateCustomer(@Param('id') id: any): Promise<any> {
    console.log(id.replace('list', ''));
    return await this.updateCustomer(id);
  }

  // 고객 정보 삭제
  @Delete(':id')
  async delCustomer(@Param('id') id: any): Promise<any> {
    return await this.UsersService.delCustomer(id.replace('list', ''));
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
