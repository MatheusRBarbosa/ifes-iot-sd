import { Module } from '@nestjs/common';
import { TemperaturaService } from './temperatura.service';
import { temperaturaProviders } from './temperatura.providers';
import { MongoModule } from '../mongo/mongo.module';

@Module({
  imports: [ MongoModule ],
  controllers: [],
  providers: [TemperaturaService, ...temperaturaProviders],
})
export class TemperaturaModule {}