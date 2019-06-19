import * as conf from '../config/rabbitmq.config';
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


export async function getConsumerChannel (): Promise<amqp.Channel> {

  let conn: amqp.Connection;
  let channel: amqp.Channel;
  
  while ( channel == undefined ) {
      try {
          conn = await amqp.connect( conf.amqpOptions );
      } catch ( err ) {
          console.log( `[ getPublishChannel ] Falha ao tentar se conectar ao rabbitMQ. ${err.message}` );
      }
      if ( conn ) {
          try {
              channel = await conn.createChannel();
          } catch ( err ) {
              console.log( `[ getPublishChannel ] Falha ao declarar o canal de produção no rabbitMQ. ${err.message}` );
              channel = undefined;
          }
          try {
              await channel.assertExchange( conf.rabbitTopicName, 'topic', { durable: false } );
          } catch ( err ) {
              console.log( `[ getPublishChannel ] Falha ao declarar um topico no rabbitMQ. ${err.message}` );
              channel = undefined;
          }

          try {
              await channel.assertQueue( conf.rabbitConsumerQueueName, { messageTtl: conf.rabbitConsumerTTL, durable: false } );
          } catch ( err ) {
              console.log( `[ getPublishChannel ] Falha ao declarar a fila de publicação no rabbitMQ. ${err.message}` );
              channel = undefined;
          }

          try {
              await channel.bindQueue( conf.rabbitConsumerQueueName, conf.rabbitTopicName, conf.rabbitConsumerRoutingKey );
          } catch ( err ) {
              console.log( `[ getPublishChannel ] Falha ao configurar a chave de roteamento. ${err.message}` );
              channel = undefined;
          }
      }
  }
  return channel;
}

