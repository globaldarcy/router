import {CanDeactivate} from "@angular/router";
import {StockComponent} from "../stock/stock.component";
/**
 * Created by Shawn on 2017/12/16.
 */
export class FocusGuard implements CanDeactivate<StockComponent> {
  canDeactivate(component: StockComponent) {
    if (component.isFocus()) {
      return true;
    }
    return window.confirm("不关注就离开吗? 可以赚钱");
  }

}
