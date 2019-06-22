import * as mongoose from 'mongoose';

export const TemperaturaSchema = new mongoose.Schema({
  temperatura: Number,
  umidade: Number,
  timestamp: Date,
  intervalo: Boolean
});