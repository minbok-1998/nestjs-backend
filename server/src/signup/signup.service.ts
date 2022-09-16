import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SIGNUP } from './signup.entity';
import { SignUpDto } from './dto/signup.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SignupService {
  constructor(
    @InjectRepository(SIGNUP)
    private readonly signupRepository: Repository<SIGNUP>,
  ) {}

  // 이메일 유효성 체크
  async checkEmail(data): Promise<any> {
    const email = data.email;
    const result = await this.signupRepository.findOne({ where: { email } });

    if (result) {
      throw new HttpException('already exist', 403);
    } else {
      this.signUp(data);
      throw new HttpException('u can use it!', 200);
    }
  }

  // 회원 가입 요청 보내기
  async signUp(signupData: SignUpDto): Promise<SIGNUP> {
    try {
      const salt = bcrypt.genSalt();
      const clone = Object.assign({}, signupData);
      let result: SIGNUP;

      bcrypt.hash(signupData.password, await salt, async (err, hash) => {
        clone.password = hash;

        result = await this.signupRepository.save(clone);
      });

      return result;
    } catch (err) {
      console.log(err);
    }
  }

  // 로그인
  // async login(loginData: )
}
