import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  private stock: Stock;
  private isPro: boolean;
  private focus: boolean = false;

  constructor(private routeInfo: ActivatedRoute) {
  }

  ngOnInit() {
    // this.routeInfo.params.subscribe((params: Params) => this.stockId = params['id']);

    // this.stockId = this.routeInfo.snapshot.params['id'];
    this.isPro = this.routeInfo.snapshot.data[0]['isPro'];
    this.routeInfo.data.subscribe((data: {stock: Stock}) => {
      this.stock = data.stock;
    });
  }

  isFocus() {
    return this.focus;
  }

}

export class Stock {
  constructor(public id: number, public name: string) {
  }
}
