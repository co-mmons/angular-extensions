import * as tslib_1 from "tslib";
import { Directive, ElementRef } from "@angular/core";
let ElementRefExport = class ElementRefExport extends ElementRef {
    constructor(element) {
        super(element.nativeElement);
    }
};
ElementRefExport = tslib_1.__decorate([
    Directive({
        selector: "[element-ref], [elementRef]",
        exportAs: "ElementRef"
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef])
], ElementRefExport);
export { ElementRefExport };
//# sourceMappingURL=element-ref-export.js.map