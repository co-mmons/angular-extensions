import {Injectable} from "@angular/core";
import {CanDeactivate as RouterCanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";

@Injectable()
export class CanDeactivateGuard implements RouterCanDeactivate<CanDeactivate> {

    constructor() {
    }

    canDeactivate(component: CanDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (component.canDeactivate) {
            return component.canDeactivate(currentRoute, currentState, nextState);
        }

        return true;
    }
}

export interface CanDeactivate {
    canDeactivate(currentRoute?: ActivatedRouteSnapshot, currentState?: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean;
}
