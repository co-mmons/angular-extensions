import { __decorate } from "tslib";
import { Pipe } from "@angular/core";
import { DomSanitizer, SafeStyle } from "@angular/platform-browser";
var SafeStyleUrlPipe = /** @class */ (function () {
    function SafeStyleUrlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeStyleUrlPipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustStyle("url(" + url + ")");
    };
    SafeStyleUrlPipe.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    SafeStyleUrlPipe = __decorate([
        Pipe({
            name: "safeStyleUrl"
        })
    ], SafeStyleUrlPipe);
    return SafeStyleUrlPipe;
}());
export { SafeStyleUrlPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FmZS1zdHlsZS11cmwtcGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjby5tbW9ucy9hbmd1bGFyLWV4dGVuc2lvbnMvZG9tLXNhbml0aXplci8iLCJzb3VyY2VzIjpbInNhZmUtc3R5bGUtdXJsLXBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxJQUFJLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBQyxZQUFZLEVBQUUsU0FBUyxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFLbEU7SUFFSSwwQkFBb0IsU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztJQUMzQyxDQUFDO0lBRUQsb0NBQVMsR0FBVCxVQUFVLEdBQVc7UUFDakIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLFNBQU8sR0FBRyxNQUFHLENBQUMsQ0FBQztJQUNsRSxDQUFDOztnQkFMOEIsWUFBWTs7SUFGbEMsZ0JBQWdCO1FBSDVCLElBQUksQ0FBQztZQUNGLElBQUksRUFBRSxjQUFjO1NBQ3ZCLENBQUM7T0FDVyxnQkFBZ0IsQ0FRNUI7SUFBRCx1QkFBQztDQUFBLEFBUkQsSUFRQztTQVJZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7RG9tU2FuaXRpemVyLCBTYWZlU3R5bGV9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XG5cbkBQaXBlKHtcbiAgICBuYW1lOiBcInNhZmVTdHlsZVVybFwiXG59KVxuZXhwb3J0IGNsYXNzIFNhZmVTdHlsZVVybFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHtcbiAgICB9XG5cbiAgICB0cmFuc2Zvcm0odXJsOiBzdHJpbmcpOiBTYWZlU3R5bGUge1xuICAgICAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKGB1cmwoJHt1cmx9KWApO1xuICAgIH1cbn1cbiJdfQ==