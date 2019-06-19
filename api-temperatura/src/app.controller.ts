import { Controller, Post, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('temperatura/:temperatura/umidade/:umidade')
  publicaTemperautra(@Param() params): Promise<number> {
    return this.appService.publicaTemperautra(params.temperatura, params.umidade);
  }
}
