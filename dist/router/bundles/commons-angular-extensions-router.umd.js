(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@co.mmons/angular-extensions/router', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.co = global.co || {}, global.co.mmons = global.co.mmons || {}, global.co.mmons['angular-extensions'] = global.co.mmons['angular-extensions'] || {}, global.co.mmons['angular-extensions'].router = {}), global.ng.core));
}(this, (function (exports, core) { 'use strict';

    var CanDeactivateGuard = /** @class */ (function () {
        function CanDeactivateGuard() {
        }
        CanDeactivateGuard.prototype.canDeactivate = function (component, currentRoute, currentState, nextState) {
            if (component.canDeactivate) {
                return component.canDeactivate.call(component, currentRoute, currentState, nextState);
            }
            return true;
        };
        return CanDeactivateGuard;
    }());
    CanDeactivateGuard.decorators = [
        { type: core.Injectable }
    ];
    CanDeactivateGuard.ctorParameters = function () { return []; };

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CanDeactivateGuard = CanDeactivateGuard;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=commons-angular-extensions-router.umd.js.map
