import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  data() {
    const month = {
      month : ["1", "2", "2", "3", "May", "Jun", "Jul", "Aug", "Sep"]
    }
    return month;
  }
}
