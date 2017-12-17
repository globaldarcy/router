import { Injectable } from '@angular/core';
import {LoggerService} from "./logger.service";

@Injectable()
export class StockService {

  constructor(public logger: LoggerService) { }

  getStock (): Stock2 {
    this.logger.Log('getStock方法被调用');
    return new Stock2(100, 'IBM');
  }

}

export class Stock2 {
  constructor(public id: number, public name: string) {}
}
