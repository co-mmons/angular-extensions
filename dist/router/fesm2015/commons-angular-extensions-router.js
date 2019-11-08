import { __decorate } from 'tslib';
import { Injectable } from '@angular/core';

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
CanDeactivateGuard = __decorate([
    Injectable()
], CanDeactivateGuard);

/**
 * Generated bundle index. Do not edit.
 */

export { CanDeactivateGuard };
//# sourceMappingURL=commons-angular-extensions-router.js.map
