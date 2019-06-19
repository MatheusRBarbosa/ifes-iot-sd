import { Document } from 'mongoose';

export interface Temperatura extends Document {
    readonly temperatura: number,
    readonly umidade: number,
    readonly timestamp: Date,
}
