import { Injectable, Inject } from '@nestjs/common';
import { Channel } from 'amqplib';
import { getConsumerChannel } from './rabbitmq/getConsumerChannel.service';
import * as conf from './config/rabbitmq.config';
import { Temperatura } from './temperatura/interfaces/temperatura.interface';
import { TemperaturaService } from './temperatura/temperatura.service';
import { Model } from 'mongoose';
import { TemperaturaDto } from './temperatura/dto/temperatura.dto';

@Injectable()
export class AppService {
  
  constructor(
      @Inject('TEMPERATURA_MODEL')
      private readonly TemperaturaModel: Model<Temperatura>
  )
  {
    this.consumeTemp();
  }

  private readonly tempService: TemperaturaService = new TemperaturaService(this.TemperaturaModel);

  private async consumeTemp () {
      const consumerChannel: Channel = await getConsumerChannel();


      console.log( `-------------------------------------------------------\n` +
          `[ ${new Date()} ]\n\t| ..... Serviço iniciado ..... |\n` +
          `-------------------------------------------------------\n\n` );

      await consumerChannel.consume( conf.rabbitConsumerQueueName, async ( msg ) => {
          consumerChannel.ack( msg );
          let temp: TemperaturaDto = JSON.parse( msg.content.toString() );


          console.log('Recebendo: ');
          console.log(temp);
          console.log('====================');

          await this.tempService.create(temp);

      } );
  }
}
