import { Injectable } from '@angular/core';

class CanDeactivateGuard {
    constructor() {
    }
    canDeactivate(component, currentRoute, currentState, nextState) {
        if (component.canDeactivate) {
            return component.canDeactivate.call(component, currentRoute, currentState, nextState);
        }
        return true;
    }
}
CanDeactivateGuard.decorators = [
    { type: Injectable }
];
CanDeactivateGuard.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { CanDeactivateGuard };
//# sourceMappingURL=commons-angular-extensions-router.js.map
