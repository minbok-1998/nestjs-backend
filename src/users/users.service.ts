import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  SetMetadata,
} from '@nestjs/common';

import { CUSTOMER } from './user.entity';

// router.get("/:id", async (req, res) => {
//   let sql = "SELECT * FROM CUSTOMER WHERE id = ?";
//   const params = [req.params.id];

//   try {
//     const result = await connection.query(sql, params);
//     res.send(result);
//   } catch (err) {
//     res.send(err);
//   }
// });

// const _get = async (url) => {
//   try {
//     const result = await axios.get(url, config);
//     return result.data;
//   } catch (err) {
//     throwError(err);
//   }
// };

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(CUSTOMER)
    private readonly customerRepository: Repository<CUSTOMER>,
  ) {}

  async getAllUsers(): Promise<CUSTOMER[]> {
    const result = await this.customerRepository.find(); // select * from customer

    try {
      console.log('데이터 불러오기 성공!');
      console.log(typeof result);
      console.log(Array.isArray(result));
      console.log(result.length);
      // throw new Error('err');
      return result;
    } catch (error) {
      console.log('에러발생!');
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: '데이터를 불러오는 과정에서 에러가 발생했습니다!',
        },
        HttpStatus.FORBIDDEN,
      );
    }
  }

  // getHello(): string {
  //   return '안녕!!!!!!';
  // }
}
