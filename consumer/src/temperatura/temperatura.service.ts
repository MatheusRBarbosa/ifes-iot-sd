import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Temperatura } from '../interfaces/temperatura.interface';


@Injectable()
export class TemperaturaService {
    
    constructor(
        @Inject('TemperaturaModelToken')
        private readonly TemperaturaModel: Model<Temperatura>
    ) {}

    public async insertData(temp: Temperatura): Promise<void>{
        
    }

}