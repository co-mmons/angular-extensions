import { __decorate } from "tslib";
import { Pipe } from "@angular/core";
import { DomSanitizer, SafeStyle } from "@angular/platform-browser";
let SafeStylePipe = class SafeStylePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(style) {
        return this.sanitizer.bypassSecurityTrustStyle(style);
    }
};
SafeStylePipe.ctorParameters = () => [
    { type: DomSanitizer }
];
SafeStylePipe = __decorate([
    Pipe({
        name: "safeStyle"
    })
], SafeStylePipe);
export { SafeStylePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FmZS1zdHlsZS1waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvLm1tb25zL2FuZ3VsYXItZXh0ZW5zaW9ucy9kb20tc2FuaXRpemVyLyIsInNvdXJjZXMiOlsic2FmZS1zdHlsZS1waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsSUFBSSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUMsWUFBWSxFQUFFLFNBQVMsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBS2xFLElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWE7SUFFdEIsWUFBb0IsU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztJQUMzQyxDQUFDO0lBRUQsU0FBUyxDQUFDLEtBQWE7UUFDbkIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFELENBQUM7Q0FDSixDQUFBOztZQU5rQyxZQUFZOztBQUZsQyxhQUFhO0lBSHpCLElBQUksQ0FBQztRQUNGLElBQUksRUFBRSxXQUFXO0tBQ3BCLENBQUM7R0FDVyxhQUFhLENBUXpCO1NBUlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7RG9tU2FuaXRpemVyLCBTYWZlU3R5bGV9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XG5cbkBQaXBlKHtcbiAgICBuYW1lOiBcInNhZmVTdHlsZVwiXG59KVxuZXhwb3J0IGNsYXNzIFNhZmVTdHlsZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHtcbiAgICB9XG5cbiAgICB0cmFuc2Zvcm0oc3R5bGU6IHN0cmluZyk6IFNhZmVTdHlsZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoc3R5bGUpO1xuICAgIH1cbn1cbiJdfQ==