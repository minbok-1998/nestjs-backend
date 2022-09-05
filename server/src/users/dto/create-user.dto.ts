// dto는 Data Transfer Object의 약자로서, 데이터를 오브젝트로 변환하는 객체입니다
// 어떠한 값이 어떤 타입을 가지고 이 값이 필수인지 옵션인지 정의하기위한 파일이라고 보시면 됩니다

export class CreateUserDto {
  readonly name: string;
  readonly birthday: string;
  readonly gender: string;
  readonly job: string;
}
