import * as conf from '../../config/rabbitmq.config';
import * as amqp from 'amqplib';



async function createChannel () {
  let channel: amqp.Channel;
  let conn: amqp.Connection;


  try {
    conn = await amqp.connect( conf.amqpOptions );

    try {
      channel = await conn.createChannel();

      try {
        await channel.assertExchange( conf.rabbitTopicName, 'topic', { durable: false } );
        return channel;
      }

      catch ( err ) {
        console.log( `[ createChannel ] Falha ao declarar um topico no rabbitMQ. ${err.message}` );
        channel = undefined;
      }
    }

    catch ( err ) {
      console.log( `[ createChannel ] Falha ao declarar um canal no rabbitMQ. ${err.message}` );
      channel = undefined;
    }


  }
  catch ( err ) {
    console.log( `[ createChannel ] Falha ao tentar se conectar ao rabbitMQ. ${err.message}` );
  }
}


export async function getPublishChannel (): Promise<amqp.Channel> {

    let channel: amqp.Channel = await createChannel();
    while ( channel == undefined ) {

        try {
            await channel.assertQueue( conf.rabbitPublishQueueName, { /*messageTtl: conf.rabbitPublishTTL,*/ durable: false } );
        } catch ( err ) {
            console.log( `[ getPublishChannel ] Falha ao declarar a fila de publicação no rabbitMQ. ${err.message}` );
            channel = undefined;
        }

        try {
            await channel.bindQueue( conf.rabbitPublishQueueName, conf.rabbitTopicName, conf.rabbitPublishRoutingKey );
        } catch ( err ) {
            console.log( `[ getPublishChannel ] Falha ao configurar a chave de roteamento. ${err.message}` );
            channel = undefined;
        }
    }
    return channel;
}
