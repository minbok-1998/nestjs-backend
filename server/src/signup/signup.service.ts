import { Injectable } from '@nestjs/common';
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

  // 회원 가입 요청 보내기
  async signUp(signupData: SignUpDto): Promise<SignUpDto> {
    try {
      const salt = bcrypt.genSalt();
      const clone = Object.assign({}, signupData);
      let result;

      bcrypt.hash(signupData.password, await salt, async (err, hash) => {
        clone.password = hash;

        // console.log('clone');
        // console.log(clone);

        result = await this.signupRepository.save(clone);

        console.log('result');
        console.log(result);
      });

      // console.log(signupData);

      // const result = await this.signupRepository.save(signupData);
      return result;
    } catch (err) {
      console.log(err);
    }
  }
}

// bcrypt.hash(params[1], saltRounds, async (err, hash) => {
//   params[1] = hash;
//   const result = await connection.query(sql, params);
