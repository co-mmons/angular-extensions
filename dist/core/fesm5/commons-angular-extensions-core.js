import { __extends, __decorate } from 'tslib';
import { ElementRef, Directive, NgModule } from '@angular/core';

var ElementRefExport = /** @class */ (function (_super) {
    __extends(ElementRefExport, _super);
    function ElementRefExport(element) {
        return _super.call(this, element.nativeElement) || this;
    }
    ElementRefExport.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    ElementRefExport = __decorate([
        Directive({
            selector: "[element-ref], [elementRef]",
            exportAs: "ElementRef"
        })
    ], ElementRefExport);
    return ElementRefExport;
}(ElementRef));

var CoreExtensionsModule = /** @class */ (function () {
    function CoreExtensionsModule() {
    }
    CoreExtensionsModule = __decorate([
        NgModule({
            declarations: [ElementRefExport],
            exports: [ElementRefExport]
        })
    ], CoreExtensionsModule);
    return CoreExtensionsModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { CoreExtensionsModule, ElementRefExport };
//# sourceMappingURL=commons-angular-extensions-core.js.map
