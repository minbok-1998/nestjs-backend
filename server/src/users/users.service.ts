import { Injectable, Req } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HttpException, HttpStatus } from '@nestjs/common';

import { CUSTOMER } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(CUSTOMER)
    private readonly customerRepository: Repository<CUSTOMER>,
  ) {}

  // 고객 정보 불러오기
  async getAllUsers(): Promise<any> {
    try {
      const result = await this.customerRepository
        .createQueryBuilder()
        .where('isDelete = 1')
        .getMany();

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
  async addCustomer(customer: CUSTOMER): Promise<CUSTOMER> {
    try {
      const result = await this.customerRepository.save(customer);
      return result;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: '회원가입 과정에서 에러가 발생했습니다!',
        },
        HttpStatus.FORBIDDEN,
      );
    }
  }

  // 고객 정보 수정
  async updateCustomer(id: number): Promise<any> {
    try {
      const result = await this.customerRepository.find();
      console.log('result');
      console.log(result);
      // .createQueryBuilder()
      // .update(CUSTOMER)
      // .set({ name: '이름', birthday: '8789', gender: '여자', job: '대학생' })
      // .where(`id = ${id}`)
      // .execute();

      return result;
    } catch (error) {
      console.log(error);
    }
  }

  // 고객 정보 삭제
  async delCustomer(id: number): Promise<any> {
    try {
      const result = await this.customerRepository
        .createQueryBuilder()
        .update(CUSTOMER)
        .set({ isDelete: -1 })
        .where(`id = ${id}`)
        .execute();

      return result;
    } catch (error) {
      console.log(error);
    }
  }
}
