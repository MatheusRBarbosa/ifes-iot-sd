import { Connection } from 'mongoose';
import { TemperaturaSchema } from './schemas/temperatura.schema';

export const temperaturaProviders = [
  {
    provide: 'TEMPERATURA_MODEL',
    useFactory: (connection: Connection) => connection.model('Temperatura', TemperaturaSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];