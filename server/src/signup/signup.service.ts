import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NEWSIGNUP } from './signup.entity';
import { SignUpDto } from './dto/signup.dto';

@Injectable()
export class SignupService {
  constructor(
    @InjectRepository(NEWSIGNUP)
    private readonly signupRepository: Repository<NEWSIGNUP>,
  ) {}

  // 회원 가입 요청 보내기
  async signUp(data: SignUpDto): Promise<SignUpDto> {
    console.log('data');
    console.log(data);
    try {
      const result = await this.signupRepository.save(data);
      return result;
    } catch (err) {
      console.log(err);
    }
  }
}
