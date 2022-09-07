import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CUSTOMER } from './user.entity';

@Controller('/user')
export class UsersController {
  constructor(private UsersService: UsersService) {}

  @Get('/list')
  async getAllUsers(): Promise<CUSTOMER[]> {
    return await this.UsersService.getAllUsers();
  }

  @Post('/list')
  async addCustomer(@Body() customer: CUSTOMER): Promise<CUSTOMER> {
    return await this.UsersService.addCustomer(customer);
  }

  @Post(':id')
  async delCustomer(@Param('id') id: string): Promise<any> {
    const test = await this.UsersService.delCustomer(id.replace('list', ''));
    // console.log('test');
    // console.log(test.isDelete);

    return (test.isDelete = -1);
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
