import * as tslib_1 from "tslib";
import { Directive, ElementRef } from "@angular/core";
var ElementRefExport = /** @class */ (function (_super) {
    tslib_1.__extends(ElementRefExport, _super);
    function ElementRefExport(element) {
        return _super.call(this, element.nativeElement) || this;
    }
    ElementRefExport.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    ElementRefExport = tslib_1.__decorate([
        Directive({
            selector: "[element-ref], [elementRef]",
            exportAs: "ElementRef"
        })
    ], ElementRefExport);
    return ElementRefExport;
}(ElementRef));
export { ElementRefExport };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC1yZWYtZXhwb3J0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvLm1tb25zL2FuZ3VsYXItZXh0ZW5zaW9ucy9jb3JlLyIsInNvdXJjZXMiOlsiZWxlbWVudC1yZWYtZXhwb3J0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQU1wRDtJQUFzQyw0Q0FBVTtJQUM1QywwQkFBWSxPQUFtQjtlQUMzQixrQkFBTSxPQUFPLENBQUMsYUFBYSxDQUFDO0lBQ2hDLENBQUM7O2dCQUZvQixVQUFVOztJQUR0QixnQkFBZ0I7UUFKNUIsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLDZCQUE2QjtZQUN2QyxRQUFRLEVBQUUsWUFBWTtTQUN6QixDQUFDO09BQ1csZ0JBQWdCLENBSTVCO0lBQUQsdUJBQUM7Q0FBQSxBQUpELENBQXNDLFVBQVUsR0FJL0M7U0FKWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwiW2VsZW1lbnQtcmVmXSwgW2VsZW1lbnRSZWZdXCIsXG4gICAgZXhwb3J0QXM6IFwiRWxlbWVudFJlZlwiXG59KVxuZXhwb3J0IGNsYXNzIEVsZW1lbnRSZWZFeHBvcnQgZXh0ZW5kcyBFbGVtZW50UmVmIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgICAgIHN1cGVyKGVsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgfVxufSJdfQ==