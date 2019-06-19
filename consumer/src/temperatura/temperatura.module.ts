import { Module } from '@nestjs/common';
import { MongoModule } from '../mongo/mongo.module';
import { TemperaturaService } from './temperatura.service';
import { temperaturaProviders } from './temperatura.provider';
import { MongooseModule } from '@nestjs/mongoose';
import { TemperaturaSchema } from 'src/interfaces/temperatura.schema';


@Module({
    imports: [MongoModule],
    controllers: [],
    providers: [TemperaturaService, ...temperaturaProviders]
})
export class TemperaturaModule {}
