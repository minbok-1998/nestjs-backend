export class CreateUserDto {
  readonly name: string;
  readonly email: string;
  readonly password: string;
}

export class VerifyEmailDto {
  signupVerifyToken: string;
}
