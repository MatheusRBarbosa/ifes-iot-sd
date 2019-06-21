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
    let createTemp: Temperatura;
    if(createTempDto.temperatura > 27 || createTempDto.temperatura < 18 || createTempDto.umidade > 55 || createTempDto.umidade < 40){
      createTempDto.intervalo = false;
    }
    else{
      createTempDto.intervalo = true;
    }
    createTemp = new this.tempModel(createTempDto);
    await createTemp.save();
  }
}