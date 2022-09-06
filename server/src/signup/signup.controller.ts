import { Controller, Get } from '@nestjs/common';
import { SignupService } from './signup.service';

@Controller('/signup')
export class SignupController {
  constructor(private signupService: SignupService) {}

  @Get()
  addCustomer() {
    return this.signupService.signup();
  }
}
