import {CanActivate} from "@angular/router";
/**
 * Created by Shawn on 2017/12/16.
 */
export class PermissionGuard implements CanActivate {
  canActivate() {
    var hasPermission: boolean = Math.random() < 1;
    if (!hasPermission) {
      console.log('用户无法访问此股票详情');
    }
    return hasPermission;
  }

}
