import { Controller, Post, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('temperatura')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post(':temperatura/:umidade')
  publicaTemperautra(@Param() params): Promise<number> {
    return this.appService.publicaTemperautra(params.temperatura, params.umidade);
    //return 'Olá mundo'+params.temperatura+" - "+ params.umidade;
  }
}
