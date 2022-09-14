import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { SignupService } from './signup.service';
import { SignUpDto } from './dto/signup.dto';

@Controller('/signup')
export class SignupController {
  constructor(private SignupService: SignupService) {}

  // 고객 목록 불러오기
  @Get('/')
  @Render('/pages/signup')
  async signupView() {
    return {};
  }

  @Post()
  async signup(@Body() signupData: SignUpDto): Promise<SignUpDto> {
    const result = await this.SignupService.signUp(signupData);
    return result;
  }
}
