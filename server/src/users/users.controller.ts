import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Render,
  Req,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CUSTOMER } from './user.entity';
import { CreateUserDto } from './dto/user.dto';

@Controller('/user')
export class UsersController {
  constructor(private UsersService: UsersService) {}

  // 고객 목록 불러오기
  @Get('/list')
  @Render('index')
  async getCustomer() {
    const result = await this.UsersService.getAllUsers();
    return { customer: result };
  }

  // 고객 정보 추가
  @Post('/list')
  async addCustomer(@Body() customer: CUSTOMER): Promise<CreateUserDto> {
    const result = await this.UsersService.addCustomer(customer);
    return result;
  }

  // 고객 정보 수정
  @Put('/list/:id')
  async updateCustomer(
    @Param('id') id: number,
    @Body() val: any,
    @Req() res,
  ): Promise<any> {
    console.log('res');
    console.log(res);
    const result = await this.UsersService.updateCustomer(id, val);
    return result;
  }

  // 고객 정보 삭제
  @Delete('/list/:id')
  async deleteCustomer(@Param('id') id: number): Promise<object> {
    const result = await this.UsersService.delCustomer(id);

    return result;
  }
}
