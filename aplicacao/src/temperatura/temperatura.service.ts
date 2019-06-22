import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Temperatura } from './temperatura.interface';

@Injectable()
export class TemperaturaService {
  constructor(
    @Inject('TEMPERATURA_MODEL') private readonly tempModel: Model<Temperatura>
    ) {}

  
  async findAllTemp() {

    let temp: Temperatura[] = await this.tempModel.find().exec();
    let tempos: String[] = [];
    let temposI: String[] = [];

    let temperaturas: Number[] = [];
    let temperaturasI: Number[] = [];

    let umidades: Number[] = [];
    let umidadesI: Number[] = [];

    let mediaTemp : number = 0;
    let mediaTempI : number = 0;

    let mediaUmidade: number = 0;
    let mediaUmidadeI: number = 0;

    let count: number = 0;
    let countI: number = 0;

    for(let i=0; i<temp.length;i++){
      if(temp[i] != undefined){
        if(temp[i].intervalo){
          mediaTemp += temp[i].temperatura
          mediaUmidade += temp[i].umidade
          count++;
        }
        else{
          mediaTempI += temp[i].temperatura
          mediaUmidadeI += temp[i].umidade
          countI++;
        }
      }
    }
    mediaTemp = Math.round(mediaTemp / count);
    mediaTempI = Math.round(mediaTempI / countI);

    mediaUmidade = Math.round(mediaUmidade / count);
    mediaUmidadeI = Math.round(mediaUmidadeI / countI);

    for(let i=temp.length-500; i < temp.length; i++){

      let t: Temperatura = temp[i];
      if(t != undefined){
        if(t.intervalo){
          temperaturas.push(t.temperatura);
          umidades.push(t.umidade)
          tempos.push(this.dateFormat(t.timestamp.getTime()))
        }
        else{
          temperaturasI.push(t.temperatura);
          umidadesI.push(t.umidade)
          temposI.push(this.dateFormat(t.timestamp.getTime()))
        }
      }
      
    }
    
    let resp = {
      labels: tempos,
      labelsI: temposI,
      temperaturas: temperaturas,
      temperaturasI: temperaturasI,
      umidades: umidades,
      umidadesI: umidadesI,
      mediaTemp: mediaTemp,
      mediaTempI: mediaTempI,
      mediaUmidade: mediaUmidade,
      mediaUmidadeI: mediaUmidadeI,
      total: count,
      totalI: countI
    }
    return resp;
  }

  private dateFormat(date: number): string {
    const dateConversor: string = new Date(date).toLocaleString();
    const dateSplited: string[] = dateConversor.split(" ");
    let calendar: string[] = dateSplited[0].split("-");
    const yearAux: string = calendar[0];
    calendar[0] = calendar[2];
    calendar[2] = yearAux;
    //const resp: string = calendar[0] + "-" + calendar[1] + "-" + calendar[2] + " " + dateSplited[1]; "dd-mm-yyyy hh:mm:ss"
    const resp: string = dateSplited[1];
    return resp;
  }

}