import * as mongoose from 'mongoose';
import { BancoConfig } from '../config/mongo.config';

const config: BancoConfig = new BancoConfig();

export const mongoProvider = [
  {
    provide: 'DbConnectionToken',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect( config.uri, { 
        useNewUrlParser: true       
      }),
  },
];
