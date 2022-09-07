import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { UserModule } from './users/user.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { CUSTOMER } from './users/user.entity';
import { SignupModule } from './signup/signup.module';
import { NEWSIGNUP } from './signup/signup.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '0527',
      database: 'management',
      entities: [CUSTOMER, NEWSIGNUP],
      // synchronize: false, // true로 설정 시 데이터 손실 위험 있음
      migrationsRun: true, //  데이터베이스의 변경점을 소스 코드로 관리할 수 있음
    }),
    UserModule,
    SignupModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
