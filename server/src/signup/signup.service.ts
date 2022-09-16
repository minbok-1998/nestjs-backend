import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SIGNUP } from './signup.entity';
import { SignUpDto } from './dto/signup.dto';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { LOGIN } from './dto/login.entity';

@Injectable()
export class SignupService {
  constructor(
    @InjectRepository(SIGNUP)
    private readonly signupRepository: Repository<SIGNUP>,
  ) {}

  // 이메일 유효성 체크
  async signUp(data): Promise<any> {
    const email = data.email;
    const result = await this.signupRepository.findOne({ where: { email } });

    if (result) {
      throw new HttpException('already exist', 403);
    } else {
      this.saveUserInfo(data);
      throw new HttpException('u can use it!', 200);
    }
  }

  // 회원 가입 요청 보내기
  async saveUserInfo(signupData: SignUpDto): Promise<SIGNUP> {
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

  // 로그인 요청 보내기
  async login(loginData: LoginDto): Promise<any> {
    const email = loginData.email;
    const password = loginData.password;
    // console.log('loginData');
    // console.log(loginData);

    const user = await this.signupRepository.findOne({ where: { email } });

    // 일치하는 아이디가 DB에 존재하는지 확인
    if (user) {
      const userPassword = user.password;
      // console.log('exist user');
      // console.log(userPassword);

      // 비밀번호 복호화 및 검증
      bcrypt.compare(password, userPassword, function (err, result) {
        if (result) {
          console.log('create token');
        } else {
          // 이거 왜 클라이언트에서 반환안하지?
          throw new HttpException('비밀번호가 일치하지 않습니다.', 403);
        }
      });
    } else {
      throw new HttpException('존재하지 않는 아이디 입니다!', 403);
    }
  }
}
