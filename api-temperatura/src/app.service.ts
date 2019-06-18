import { Injectable } from '@nestjs/common';
import { Channel } from 'amqplib';
import { getPublishChannel } from './services/rabbitmq/getPublishChannel.service';
import { Temperatura } from './interfaces/temperatura.interface';
import { publish } from './services/rabbitmq/publish.service';

@Injectable()
export class AppService {
  
  publishChannel: Channel = null;

  async publicaTemperautra(temperatura: number, umidade: number): Promise<number> {
    
    if(this.publishChannel == null) this.publishChannel = await getPublishChannel();

    if(temperatura != undefined && umidade != undefined){
      const temp: Temperatura = {
        temperatura: temperatura,
        umidade: umidade
      }

      publish(this.publishChannel, temp);
      return 200;
    }
    return 500;
  }
}
