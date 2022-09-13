import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  birthday: string;

  @IsNotEmpty()
  gender: string;

  @IsNotEmpty()
  job: string;
}
