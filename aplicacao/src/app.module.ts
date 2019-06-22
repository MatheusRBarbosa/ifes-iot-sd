import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TemperaturaModule } from 'temperatura/temperatura.module';
import { MongoModule } from 'mongo/mongo.module';
import { temperaturaProviders } from 'temperatura/temperatura.providers';

@Module({
  imports: [TemperaturaModule, MongoModule],
  controllers: [AppController],
  providers: [...temperaturaProviders],
})
export class ApplicationModule {}