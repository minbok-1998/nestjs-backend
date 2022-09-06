import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NEWSIGNUP } from './signup.entity';

@Injectable()
export class SignupService {
  constructor(
    @InjectRepository(NEWSIGNUP)
    private readonly signupRepository: Repository<NEWSIGNUP>,
  ) {}

  // 회원 가입 요청 보내기
  async signup(): Promise<NEWSIGNUP[]> {
    const result = await this.signupRepository.find();

    return result;
  }
}
