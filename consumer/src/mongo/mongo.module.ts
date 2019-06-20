import { Module } from '@nestjs/common';
import { temperaturaProviders } from './mongo.providers';

@Module({
  providers: [...temperaturaProviders],
  exports: [...temperaturaProviders],
})
export class MongoModule {}