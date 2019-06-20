import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TemperaturaModule } from './temperatura/temperatura.module';
import { temperaturaProviders } from './temperatura/temperatura.providers';
import { MongoModule } from './mongo/mongo.module';

@Module({
  imports: [TemperaturaModule, MongoModule],
  controllers: [],
  providers: [AppService, ...temperaturaProviders],
})
export class AppModule {}
