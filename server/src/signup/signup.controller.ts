import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { SignupService } from './signup.service';
import { SignUpDto } from './dto/signup.dto';

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

  @Post('/signup')
  async signup(@Body() signupData: SignUpDto): Promise<SignUpDto> {
    const result = await this.SignupService.signUp(signupData);
    return result;
  }
}
