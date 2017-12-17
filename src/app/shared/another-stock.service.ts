import { Injectable } from '@angular/core';
import {Stock2, StockService} from "./stock.service";
import {LoggerService} from "./logger.service";

@Injectable()
export class AnotherStockService implements StockService {
  getStock(): Stock2 {
    return new Stock2(3000, "Accenture");
  }

  constructor(public logger: LoggerService) { }
}
