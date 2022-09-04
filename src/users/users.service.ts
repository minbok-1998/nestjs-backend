import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CUSTOMER } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(CUSTOMER)
    private readonly customerRepository: Repository<CUSTOMER>,
  ) {}

  async getAllUsers(): Promise<CUSTOMER[]> {
    return await this.customerRepository.find();
    // SELECT * FROM CUSTOMER;
  }

  // getHello(): string {
  //   return '안녕!!!!!!';
  // }
}
