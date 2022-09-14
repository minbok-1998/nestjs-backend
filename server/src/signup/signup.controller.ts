import { Body, Controller, Get, Post } from '@nestjs/common';
import { SignupService } from './signup.service';
import { SignUpDto } from './dto/signup.dto';

@Controller('/signup')
export class SignupController {
  constructor(private SignupService: SignupService) {}

  @Post()
  async signup(@Body() signupData: SignUpDto): Promise<void> {
    // console.log('controller');
    // console.log(SignupData);
    const result = await this.SignupService.signUp(signupData);
    console.log('cont-result');
    console.log(result);
    // return result;
  }
}
