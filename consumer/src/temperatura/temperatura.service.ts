import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { TemperaturaDto } from './dto/temperatura.dto';
import { Temperatura } from './interfaces/temperatura.interface';

@Injectable()
export class TemperaturaService {
  constructor(
    @Inject('TEMPERATURA_MODEL') private readonly tempModel: Model<Temperatura>
    ) {}

  async create(createTempDto: TemperaturaDto): Promise<void> {
  
    if(createTempDto.temperatura > 30 || createTempDto.temperatura < 0 || createTempDto.umidade > 25 || createTempDto.umidade < 10){
      const createTemp = new this.tempModel(createTempDto);
      await createTemp.save();
      console.log(`Temperatura Anormal`)
    }
    else{
      console.log(`Temperatura Normal`)
    }
  }
}