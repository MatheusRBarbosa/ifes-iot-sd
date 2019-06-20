import * as mongoose from 'mongoose';
import { BancoConfig } from '../config/mongo.config';

const bancoConfig: BancoConfig = new BancoConfig();

export const temperaturaProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect(bancoConfig.uri, { useNewUrlParser: true }),
  },
];