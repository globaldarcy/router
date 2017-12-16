import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {Stock} from "../stock/stock.component";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
/**
 * Created by Shawn on 2017/12/16.
 */
@Injectable()
export class StockResolve implements Resolve<Stock> {
  constructor(private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Stock | Observable<Stock> | Promise<Stock> {
    let id = route.params['id'];
    console.log(id);
    if (id == 3) {
      return new Stock(100100, 'IBM');
    } else {
      this.router.navigate(['/home']);
      return undefined;
    }
  }

}
