import { __decorate } from "tslib";
import { Pipe } from "@angular/core";
import { DomSanitizer, SafeHtml, SafeUrl } from "@angular/platform-browser";
var SafeUrlPipe = /** @class */ (function () {
    function SafeUrlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeUrlPipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustUrl(url);
    };
    SafeUrlPipe.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    SafeUrlPipe = __decorate([
        Pipe({
            name: "safeUrl"
        })
    ], SafeUrlPipe);
    return SafeUrlPipe;
}());
export { SafeUrlPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FmZS11cmwtcGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjby5tbW9ucy9hbmd1bGFyLWV4dGVuc2lvbnMvZG9tLXNhbml0aXplci8iLCJzb3VyY2VzIjpbInNhZmUtdXJsLXBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxJQUFJLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBQyxZQUFZLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBSzFFO0lBRUkscUJBQW9CLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7SUFDM0MsQ0FBQztJQUVELCtCQUFTLEdBQVQsVUFBVSxHQUFXO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0RCxDQUFDOztnQkFMOEIsWUFBWTs7SUFGbEMsV0FBVztRQUh2QixJQUFJLENBQUM7WUFDRixJQUFJLEVBQUUsU0FBUztTQUNsQixDQUFDO09BQ1csV0FBVyxDQVF2QjtJQUFELGtCQUFDO0NBQUEsQUFSRCxJQVFDO1NBUlksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7RG9tU2FuaXRpemVyLCBTYWZlSHRtbCwgU2FmZVVybH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcblxuQFBpcGUoe1xuICAgIG5hbWU6IFwic2FmZVVybFwiXG59KVxuZXhwb3J0IGNsYXNzIFNhZmVVcmxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7XG4gICAgfVxuXG4gICAgdHJhbnNmb3JtKHVybDogc3RyaW5nKTogU2FmZVVybCB7XG4gICAgICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0VXJsKHVybCk7XG4gICAgfVxufSJdfQ==