import { ElementRef, Directive, NgModule } from '@angular/core';

class ElementRefExport extends ElementRef {
    constructor(element) {
        super(element.nativeElement);
    }
}
ElementRefExport.decorators = [
    { type: Directive, args: [{
                selector: "[element-ref], [elementRef]",
                exportAs: "ElementRef"
            },] }
];
ElementRefExport.ctorParameters = () => [
    { type: ElementRef }
];

class CoreExtensionsModule {
}
CoreExtensionsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ElementRefExport],
                exports: [ElementRefExport]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { CoreExtensionsModule, ElementRefExport };
//# sourceMappingURL=commons-angular-extensions-core.js.map
