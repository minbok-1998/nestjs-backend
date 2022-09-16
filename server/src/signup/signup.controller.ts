import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { SignupService } from './signup.service';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';

@Controller('/')
export class SignupController {
  constructor(private SignupService: SignupService) {}

  // 회원가입 창 불러오기
  @Get('/signup')
  @Render('/pages/signup')
  async signupView() {
    return {};
  }

  // 로그인 창 불러오기
  @Get('/login')
  @Render('/pages/login')
  async loginView() {
    return {};
  }

  // 회원가입
  @Post('/signup')
  async signup(@Body() signupData: SignUpDto): Promise<any> {
    const result = await this.SignupService.signUp(signupData);
    return result;
  }

  // 로그인
  @Post('/login')
  async login(@Body() loginData: LoginDto): Promise<any> {
    const result = await this.SignupService.login(loginData);
    return result;
  }
}
