import { Connection } from 'mongoose';
import { TemperaturaSchema } from '../interfaces/temperatura.schema';

export const temperaturaProviders = [
  {
    provide: 'TemperaturaModelToken',
    useFactory: (connection: Connection) => connection.model('Temperatura', TemperaturaSchema),
    inject: ['DbConnectionToken'],
  }
];
