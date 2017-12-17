import { Component, OnInit } from '@angular/core';
import {Stock2, StockService} from "../../shared/stock.service";

@Component({
  selector: 'app-stock2',
  templateUrl: './stock2.component.html',
  styleUrls: ['./stock2.component.css']
})
export class Stock2Component implements OnInit {

  private stock: Stock2;
  constructor(public stockService: StockService) { }

  ngOnInit() {
    this.stock = this.stockService.getStock();
  }

}
