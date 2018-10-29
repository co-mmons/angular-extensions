import { CanDeactivate as RouterCanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
export declare class CanDeactivateGuard implements RouterCanDeactivate<CanDeactivate> {
    constructor();
    canDeactivate(component: CanDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean;
}
export interface CanDeactivate {
    canDeactivate(currentRoute?: ActivatedRouteSnapshot, currentState?: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean;
}
