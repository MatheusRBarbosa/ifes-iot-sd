import { Options } from 'amqplib';

const rabbitHost: string = process.env.RABBIT_HOST || 'localhost';
const rabbitPort: number = Number( process.env.RABBIT_PORT || 5672 );
const rabbitUser: string = process.env.RABBIT_USER || 'guest';
const rabbitPassword: string = process.env.RABBIT_PASSWORD || 'guest';
export const rabbitTopicName: string = process.env.RABBIT_TOPIC_NAME || 'iot';
export const rabbitConsumerQueueName: string = process.env.RABBIT_CONSUMER_QUEUE_NAME || 'ifes.sd.iot';
export const rabbitConsumerRoutingKey: string = process.env.RABBIT_CONSUMER_ROUTING_KEY || '#iot';
export const rabbitConsumerTTL: number = Number( process.env.RABBIT_CONSUMER_TTL || 60000);


export const amqpOptions: Options.Connect = {
    hostname: rabbitHost,
    locale: 'pt-br',
    port: rabbitPort,
    username: rabbitUser,
    password: rabbitPassword
};
