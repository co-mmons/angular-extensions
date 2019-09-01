import * as tslib_1 from "tslib";
import { Directive, ElementRef } from "@angular/core";
var ElementRefExport = /** @class */ (function (_super) {
    tslib_1.__extends(ElementRefExport, _super);
    function ElementRefExport(element) {
        return _super.call(this, element.nativeElement) || this;
    }
    ElementRefExport = tslib_1.__decorate([
        Directive({
            selector: "[element-ref], [elementRef]",
            exportAs: "ElementRef"
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef])
    ], ElementRefExport);
    return ElementRefExport;
}(ElementRef));
export { ElementRefExport };
//# sourceMappingURL=element-ref-export.js.map