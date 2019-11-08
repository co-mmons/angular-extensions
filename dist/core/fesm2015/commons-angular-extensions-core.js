import { __decorate } from 'tslib';
import { ElementRef, Directive, NgModule } from '@angular/core';

let ElementRefExport = class ElementRefExport extends ElementRef {
    constructor(element) {
        super(element.nativeElement);
    }
};
ElementRefExport.ctorParameters = () => [
    { type: ElementRef }
];
ElementRefExport = __decorate([
    Directive({
        selector: "[element-ref], [elementRef]",
        exportAs: "ElementRef"
    })
], ElementRefExport);

let CoreExtensionsModule = class CoreExtensionsModule {
};
CoreExtensionsModule = __decorate([
    NgModule({
        declarations: [ElementRefExport],
        exports: [ElementRefExport]
    })
], CoreExtensionsModule);

/**
 * Generated bundle index. Do not edit.
 */

export { CoreExtensionsModule, ElementRefExport };
//# sourceMappingURL=commons-angular-extensions-core.js.map
