import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { StockComponent } from './components/stock/stock.component';
import { Code404Component } from './components/code404/code404.component';
import { BuyerListComponent } from './components/buyer-list/buyer-list.component';
import { SellerListComponent } from './components/seller-list/seller-list.component';
import { ConsultComponent } from './components/consult/consult.component';
import {PermissionGuard} from "./components/guard/permission.guard";
import {FocusGuard} from "./components/guard/focus.guard";
import {StockResolve} from "./components/guard/stock.resolve";
import { Stock2Component } from './components/stock2/stock2.component';
import {StockService} from "./shared/stock.service";
import { Stock3Component } from './components/stock3/stock3.component';
import {LoggerService} from "./shared/logger.service";
import {logging} from "selenium-webdriver";
import Logger = logging.Logger;
import {AnotherStockService} from "./shared/another-stock.service";
import {log} from "util";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StockComponent,
    Code404Component,
    BuyerListComponent,
    SellerListComponent,
    ConsultComponent,
    Stock2Component,
    Stock3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PermissionGuard, FocusGuard, StockResolve, /*StockService, */LoggerService,
    {provide: StockService, useFactory: (logger: LoggerService, isDev) => {
        // let logger = new LoggerService();
        console.log(isDev);
        // let dev = Math.random() > 0.5;
        if (!isDev) {
          return new StockService(logger);
        } else {
          return new AnotherStockService(logger);
        }
      },
      deps: [LoggerService, 'IS_DEV_ENV']
    },
    {provide: 'IS_DEV_ENV', useValue: {isDev: true}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
