import { Channel } from 'amqplib';
import * as conf from '../../config/rabbitmq.config';
import { Temperatura } from '../../interfaces/temperatura.interface';


export async function publish ( connection: Channel, temperatura: Temperatura ) {

  connection.publish(
    conf.rabbitTopicName,
    conf.rabbitPublishRoutingKey,
    Buffer.from( JSON.stringify( temperatura ) ),
    { persistent: false }
  );
}
