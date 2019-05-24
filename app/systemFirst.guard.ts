import { Injectable } from "@angular/core";
import {
ActivatedRouteSnapshot, RouterStateSnapshot,
Router
} from "@angular/router";
import { SystemComponent } from "./system/system.component";
@Injectable()
export class SystemFirstGuard {
private firstNavigation = true;
constructor(private router: Router) { }
canActivate(route: ActivatedRouteSnapshot,
state: RouterStateSnapshot): boolean {
if (this.firstNavigation) {
this.firstNavigation = false;
if (route.component != SystemComponent) {
this.router.navigateByUrl("/");
return false;
}
}
return true;
}
}