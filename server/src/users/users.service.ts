import { Injectable, Req } from '@nestjs/common';
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

  // 고객 정보 불러오기
  async getAllUsers(): Promise<CUSTOMER[]> {
    const result = await this.customerRepository
      .createQueryBuilder('user')
      .where('isDeleted = 0')
      .getMany(); // select * from customer

    try {
      return result;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: '데이터를 불러오는 과정에서 에러가 발생했습니다!',
        },
        HttpStatus.FORBIDDEN,
      );
    }
  }

  // 고객 정보 추가하기
  async addCustomer(customer: CUSTOMER): Promise<void> {
    await this.customerRepository.save(customer);

    // try {
    //   return result;
    // } catch (error) {
    //   throw new HttpException(
    //     {
    //       status: HttpStatus.FORBIDDEN,
    //       error: '회원가입 과정에서 에러가 발생했습니다!',
    //     },
    //     HttpStatus.FORBIDDEN,
    //   );
    // }
  }
}
