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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StockComponent,
    Code404Component,
    BuyerListComponent,
    SellerListComponent,
    ConsultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PermissionGuard, FocusGuard, StockResolve],
  bootstrap: [AppComponent]
})
export class AppModule { }
