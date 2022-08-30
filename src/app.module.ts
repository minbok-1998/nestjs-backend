import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiControllerController } from './api-controller/api-controller.controller';

@Module({
  imports: [],
  controllers: [ApiControllerController, AppController],
  providers: [AppService],
})
export class AppModule {}
