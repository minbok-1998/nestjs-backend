import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SIGNUP } from './signup.entity';
import { SignUpDto } from './dto/signup.dto';

@Injectable()
export class SignupService {
  constructor(
    @InjectRepository(SIGNUP)
    private readonly signupRepository: Repository<SIGNUP>,
  ) {}

  // 회원 가입 요청 보내기
  async signUp(signupData: SignUpDto): Promise<SignUpDto> {
    // console.log('service');
    // console.log(SignupData);
    try {
      const result = await this.signupRepository.save(signupData);
      console.log('result');
      console.log(result);
      return result;
    } catch (err) {
      console.log('serveice err');
      console.log(err);
    }
  }
}
