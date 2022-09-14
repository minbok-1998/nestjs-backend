import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { join } from 'path';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    {
      rawBody: true,
    },
  );
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // dto에서 정의한 부분 자동 적용(true)
      forbidUnknownValues: true,
      whitelist: true, // 검증 수행 시 검증 규칙이 적용되어있지않은 프로퍼티도 오류없이 통과 후 제거시킴(true)
      forbidNonWhitelisted: true, // dto에 정의되지않은 프로퍼티 차단, 오류발생시킴(true)
      validationError: {
        target: true,
      },
    }),
  );
  app.useStaticAssets({
    root: join(__dirname, '..', '..', 'public'),
    prefix: '/public/',
  });

  app.setViewEngine({
    engine: {
      ejs: require('ejs'),
    },
    templates: join(__dirname, '..', '..', 'views'),
  });

  await app.listen(5000);
}
bootstrap();
