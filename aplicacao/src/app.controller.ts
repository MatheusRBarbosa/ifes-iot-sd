import { Controller, Get, Render, Post, Inject } from '@nestjs/common';
import { Temperatura } from 'temperatura/temperatura.interface';
import { Model } from 'mongoose';
import { TemperaturaService } from 'temperatura/temperatura.service';

@Controller()
export class AppController {

  constructor(@Inject('TEMPERATURA_MODEL') private readonly tempModel: Model<Temperatura>){}

  private service: TemperaturaService = new TemperaturaService(this.tempModel);

  @Get()
  @Render('index')
  root() {
    return { message: 'Hello world!' };
  }

  @Post()
  data(){
    return this.service.findAllTemp();
  }
}