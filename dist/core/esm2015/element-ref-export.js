import * as tslib_1 from "tslib";
import { Directive, ElementRef } from "@angular/core";
let ElementRefExport = class ElementRefExport extends ElementRef {
    constructor(element) {
        super(element.nativeElement);
    }
};
ElementRefExport.ctorParameters = () => [
    { type: ElementRef }
];
ElementRefExport = tslib_1.__decorate([
    Directive({
        selector: "[element-ref], [elementRef]",
        exportAs: "ElementRef"
    })
], ElementRefExport);
export { ElementRefExport };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC1yZWYtZXhwb3J0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvLm1tb25zL2FuZ3VsYXItZXh0ZW5zaW9ucy9jb3JlLyIsInNvdXJjZXMiOlsiZWxlbWVudC1yZWYtZXhwb3J0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQU1wRCxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFpQixTQUFRLFVBQVU7SUFDNUMsWUFBWSxPQUFtQjtRQUMzQixLQUFLLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Q0FDSixDQUFBOztZQUh3QixVQUFVOztBQUR0QixnQkFBZ0I7SUFKNUIsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLDZCQUE2QjtRQUN2QyxRQUFRLEVBQUUsWUFBWTtLQUN6QixDQUFDO0dBQ1csZ0JBQWdCLENBSTVCO1NBSlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWZ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcIltlbGVtZW50LXJlZl0sIFtlbGVtZW50UmVmXVwiLFxuICAgIGV4cG9ydEFzOiBcIkVsZW1lbnRSZWZcIlxufSlcbmV4cG9ydCBjbGFzcyBFbGVtZW50UmVmRXhwb3J0IGV4dGVuZHMgRWxlbWVudFJlZiB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZikge1xuICAgICAgICBzdXBlcihlbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgIH1cbn0iXX0=