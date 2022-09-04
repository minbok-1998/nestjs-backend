import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { UserModule } from './users/user.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { CUSTOMER } from './users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '0527',
      database: 'management',
      entities: [CUSTOMER],
      // synchronize: true,
      migrationsRun: true,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
