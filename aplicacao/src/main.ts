import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { ApplicationModule } from './app.module';
import * as cors from 'cors'

async function bootstrap() {
  const app: NestExpressApplication = await NestFactory.create(ApplicationModule, {cors: true});

  
  app.useStaticAssets(join(__dirname, '..', 'views/assets'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  await app.listen(3000);
}
bootstrap();