import {
  IsNotEmpty,
  IsEmail,
  MinLength,
  MaxLength,
  Matches,
} from 'class-validator';

export class SignUpDto {
  @MinLength(2)
  @MaxLength(8)
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(20)
  // 대문자, 소문자, 숫자, 특수문자로 이루어진 비밀번호
  @Matches(/(?=.*\d)(?=.*\W+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: '비밀번호는 대소문자, 숫자, 특수문자를 포함하여야합니다.',
  })
  password: string;

  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(20)
  passwordCheck: string;
}

// regex pattern

// /
//   (
//     (?=.*\d)     : 적어도 하나의 숫자가 준재함, \d는 digit 즉, 숫자를 의미함 [0-9]
//   |              : 앞의 패턴 또는 뒤의 패턴 중 하나와 일치함
//     (?=.*\W+)    : 하나 또는 그 이상의 비단어 문자가 존재함, \W(대문자)는 영문자와 숫자 그리고 밑줄 문자 이외의 문자를 의미함
//   )              : and
// (?![.\n])        : 한 줄로 이루어진 문자열
// (?=.*[A-Z])      : 하나 이상의 대문자 존재
// (?=.*[a-z])      : 하나 이상의 소문자 존재
// .*$
// /

// * : 0번 이상
// + : 1번 이상
// [] : 클래스
// ^... : ...로 시작하는 문자열
// ...$ : ...로 끝나는 문자열
// (?! ...) 는 ...이 없는 경우를 의미함
// (?= ...) 은 ...이 있는 경우를 의미함
