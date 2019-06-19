import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TemperaturaModule } from './temperatura/temperatura.module';
import { temperaturaProviders } from './temperatura/temperatura.provider';

@Module({
  imports: [TemperaturaModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
