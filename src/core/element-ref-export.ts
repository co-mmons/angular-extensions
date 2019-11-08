import {Directive, ElementRef} from "@angular/core";

@Directive({
    selector: "[element-ref], [elementRef]",
    exportAs: "ElementRef"
})
export class ElementRefExport extends ElementRef {
    constructor(element: ElementRef) {
        super(element.nativeElement);
    }
}