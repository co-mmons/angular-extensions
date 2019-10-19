import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
let CanDeactivateGuard = class CanDeactivateGuard {
    constructor() {
    }
    canDeactivate(component, currentRoute, currentState, nextState) {
        if (component.canDeactivate) {
            return component.canDeactivate.call(component, currentRoute, currentState, nextState);
        }
        return true;
    }
};
CanDeactivateGuard = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [])
], CanDeactivateGuard);
export { CanDeactivateGuard };
//# sourceMappingURL=can-deactivate-guard.js.map