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
    let temperaturas: Number[] = [];
    let umidades: Number[] = [];
    let tempos: String[] = [];
    let mediaTemp : number = 0;
    let mediaUmidade: number = 0;
    let count: number = 0;

    for(let i=0; i<temp.length;i++){
      if(temp[i] != undefined){
        mediaTemp += temp[i].temperatura
        mediaUmidade += temp[i].umidade
        count++;
      }
    }
    mediaTemp = Math.round(mediaTemp / count);
    mediaUmidade = Math.round(mediaUmidade / count);

    for(let i=temp.length-1; i >= temp.length-11; i--){

      let t: Temperatura = temp[i];
      
      temperaturas.push(t.temperatura);
      umidades.push(t.umidade)
      tempos.push(this.dateFormat(t.timestamp.getTime()))
      
    }
    
    let resp = {
      labels: tempos,
      temperaturas: temperaturas,
      umidades: umidades,
      mediaTemp: mediaTemp,
      mediaUmidade: mediaUmidade,
      total: count
    }
    console.log(resp)
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