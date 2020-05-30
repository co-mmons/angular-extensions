import { __decorate } from "tslib";
import { Pipe } from "@angular/core";
import { DomSanitizer, SafeStyle } from "@angular/platform-browser";
var SafeStylePipe = /** @class */ (function () {
    function SafeStylePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeStylePipe.prototype.transform = function (style) {
        return this.sanitizer.bypassSecurityTrustStyle(style);
    };
    SafeStylePipe.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    SafeStylePipe = __decorate([
        Pipe({
            name: "safeStyle"
        })
    ], SafeStylePipe);
    return SafeStylePipe;
}());
export { SafeStylePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FmZS1zdHlsZS1waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvLm1tb25zL2FuZ3VsYXItZXh0ZW5zaW9ucy9kb20tc2FuaXRpemVyLyIsInNvdXJjZXMiOlsic2FmZS1zdHlsZS1waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsSUFBSSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUMsWUFBWSxFQUFFLFNBQVMsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBS2xFO0lBRUksdUJBQW9CLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7SUFDM0MsQ0FBQztJQUVELGlDQUFTLEdBQVQsVUFBVSxLQUFhO1FBQ25CLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxRCxDQUFDOztnQkFMOEIsWUFBWTs7SUFGbEMsYUFBYTtRQUh6QixJQUFJLENBQUM7WUFDRixJQUFJLEVBQUUsV0FBVztTQUNwQixDQUFDO09BQ1csYUFBYSxDQVF6QjtJQUFELG9CQUFDO0NBQUEsQUFSRCxJQVFDO1NBUlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7RG9tU2FuaXRpemVyLCBTYWZlU3R5bGV9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XG5cbkBQaXBlKHtcbiAgICBuYW1lOiBcInNhZmVTdHlsZVwiXG59KVxuZXhwb3J0IGNsYXNzIFNhZmVTdHlsZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHtcbiAgICB9XG5cbiAgICB0cmFuc2Zvcm0oc3R5bGU6IHN0cmluZyk6IFNhZmVTdHlsZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoc3R5bGUpO1xuICAgIH1cbn1cbiJdfQ==