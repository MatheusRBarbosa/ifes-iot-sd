import { Options } from "amqplib";

const rabbitHost: string = process.env.RABBIT_HOST || 'localhost';
const rabbitPort: number = Number( process.env.RABBIT_PORT || 5672 );
const rabbitUser: string = process.env.RABBIT_USER || 'guest';
const rabbitPassword: string = process.env.RABBIT_PASSWORD || 'guest';
export const rabbitTopicName: string = process.env.RABBIT_TOPIC_NAME || 'iot';
export const rabbitPublishQueueName: string = process.env.RABBIT_PUBLISH_QUEUE_NAME || 'ifes.sd.iot';
export const rabbitPublishRoutingKey: string = process.env.RABBIT_PUBLISH_ROUTING_KEY || '#iot';
//export const rabbitPublishTTL: number = Number( process.env.RABBIT_PUBLISH_TTL );


export const amqpOptions: Options.Connect = {
    hostname: rabbitHost,
    locale: 'pt-br',
    port: rabbitPort,
    username: rabbitUser,
    password: rabbitPassword
};
