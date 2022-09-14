import { Body, Controller, Get, Post } from '@nestjs/common';
import { SignupService } from './signup.service';
import { SignUpDto } from './dto/signup.dto';

@Controller('/signup')
export class SignupController {
  constructor(private signupService: SignupService) {}

  @Post()
  addCustomer(@Body() data: any): Promise<any> {
    console.log(data);
    return this.signupService.signUp(data);
  }
}
