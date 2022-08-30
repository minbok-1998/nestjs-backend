import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  Param,
  Patch,
  Post,
  Query,
  Redirect,
  Req,
  Res,
} from '@nestjs/common';
import { AppService } from './app.service';
import { UpdateUserDto } from 'dto/UpdateUser.dto';
import { version } from 'os';
import { CreateUserDto } from '../dto/CreateUserDto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  index(): string {
    return this.appService.getHello();
  }

  // request
  @Get('/request')
  request(@Req() req: Request): string {
    console.log(req);
    return this.appService.getHello();
  }

  // response
  @Get('/response')
  response(@Res() res) {
    const greeting = this.appService.getHello();

    console.log('greeting');
    return res.status(200).send(greeting);
  }

  // header
  @Get('/header')
  @Header('Custom', 'Test Header')
  header(): string {
    return this.appService.getHello();
  }

  // redirect
  @Get('/redirect')
  @Redirect('https://www.naver.com/', 301)
  redirect(): string {
    return 'hi';
  }

  // 경로 매개변수
  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `id is ${id}`;
  }

  // 라우트 파라미터
  @Get(':test/memo/:id')
  memo(@Param('test') test: string, @Param('id') id: string): string {
    return `test ${test} id ${id}`; // test sss id 7
  }

  // 잘 모르겠음
  // @Get('redirect/docs')
  // @Redirect('https://docs.nestjs.com', 302)
  // getDocs(@Query('version') version) {
  //   if (version && version === '5') {
  //     return { url: 'https://docs.nestjs.com/v5/' };
  //   }
  // }

  // 페이로드 다루기
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    const { name, email } = createUserDto;

    return `유저를 생성했습니다. 이름 ${name}, 이메일 ${email}`;
    // 유저를 생성했습니다. 이름 minbok, 이메일 minbok@mail.com
  }
}
