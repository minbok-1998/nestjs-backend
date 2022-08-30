import { Controller, Get, HostParam, Param } from '@nestjs/common';
import { version } from 'os';

// 하위 도메인 라우팅
// @Controller({ host: 'api.localhost' })
// export class ApiControllerController {
//   @Get()
//   index(): string {
//     return 'Hello, API';
//   }
// }

@Controller({ host: ':version.api.localhost' })
export class ApiControllerController {
  @Get()
  index(@HostParam('version') version: string): string {
    return `Hello, API ${version}`; // Hello, API 33
  }
}
