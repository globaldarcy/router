import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {StockComponent} from './components/stock/stock.component';
import {Code404Component} from "./components/code404/code404.component";
import {BuyerListComponent} from "./components/buyer-list/buyer-list.component";
import {SellerListComponent} from "./components/seller-list/seller-list.component";
import {ConsultComponent} from "./components/consult/consult.component";
import {PermissionGuard} from "./components/guard/permission.guard";
import {FocusGuard} from "./components/guard/focus.guard";
import {StockResolve} from "./components/guard/stock.resolve";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'consult',
    component: ConsultComponent,
    outlet: 'aux'
  },
  {
    path: 'stock/:id',
    component: StockComponent,
    data: [{isPro: true}],
    children: [
      {
        path: '',
        redirectTo: 'buyer',
        pathMatch: 'full'
      },
      {
        path: 'buyer',
        component: BuyerListComponent
      },
      {
        path: 'seller/:id',
        component: SellerListComponent
      }
    ],
    canActivate: [PermissionGuard],
    canDeactivate: [FocusGuard],
    resolve: {
      stock: StockResolve
    }
  },
  {
    path: '**',
    component: Code404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
