import {Component, Injector, OnInit} from '@angular/core';
import {StockService} from "../../shared/stock.service";
// import {AnotherStockService} from "../../shared/another-stock.service";
import {Stock} from "../stock/stock.component";

@Component({
  selector: 'app-stock3',
  templateUrl: './stock3.component.html',
  styleUrls: ['./stock3.component.css']/*,
  providers: [{provide: StockService, useClass: AnotherStockService}]*/
})
export class Stock3Component implements OnInit {

  private stock: Stock;
  // constructor(public stockService: StockService) { }

  // 错误的风格, 没必要这样写
  public stockService: StockService
  constructor(public injector: Injector) {
    this.stockService = injector.get(StockService);
  }

  ngOnInit() {
    this.stock = this.stockService.getStock();
  }

}
