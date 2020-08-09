import { Directive, ElementRef } from "@angular/core";
export class ElementRefExport extends ElementRef {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC1yZWYtZXhwb3J0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvcmUvZWxlbWVudC1yZWYtZXhwb3J0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBTXBELE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxVQUFVO0lBQzVDLFlBQVksT0FBbUI7UUFDM0IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7WUFQSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsUUFBUSxFQUFFLFlBQVk7YUFDekI7OztZQUxrQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWZ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcIltlbGVtZW50LXJlZl0sIFtlbGVtZW50UmVmXVwiLFxuICAgIGV4cG9ydEFzOiBcIkVsZW1lbnRSZWZcIlxufSlcbmV4cG9ydCBjbGFzcyBFbGVtZW50UmVmRXhwb3J0IGV4dGVuZHMgRWxlbWVudFJlZiB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZikge1xuICAgICAgICBzdXBlcihlbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgIH1cbn0iXX0=