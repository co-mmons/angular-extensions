import * as tslib_1 from "tslib";
import { Pipe } from "@angular/core";
import { DomSanitizer, SafeHtml, SafeUrl } from "@angular/platform-browser";
let SafeUrlPipe = class SafeUrlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustUrl(url);
    }
};
SafeUrlPipe.ctorParameters = () => [
    { type: DomSanitizer }
];
SafeUrlPipe = tslib_1.__decorate([
    Pipe({
        name: "safeUrl"
    })
], SafeUrlPipe);
export { SafeUrlPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FmZS11cmwtcGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjby5tbW9ucy9hbmd1bGFyLWV4dGVuc2lvbnMvZG9tLXNhbml0aXplci8iLCJzb3VyY2VzIjpbInNhZmUtdXJsLXBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxJQUFJLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBQyxZQUFZLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBSzFFLElBQWEsV0FBVyxHQUF4QixNQUFhLFdBQVc7SUFFcEIsWUFBb0IsU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztJQUMzQyxDQUFDO0lBRUQsU0FBUyxDQUFDLEdBQVc7UUFDakIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Q0FDSixDQUFBOztZQU5rQyxZQUFZOztBQUZsQyxXQUFXO0lBSHZCLElBQUksQ0FBQztRQUNGLElBQUksRUFBRSxTQUFTO0tBQ2xCLENBQUM7R0FDVyxXQUFXLENBUXZCO1NBUlksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7RG9tU2FuaXRpemVyLCBTYWZlSHRtbCwgU2FmZVVybH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcblxuQFBpcGUoe1xuICAgIG5hbWU6IFwic2FmZVVybFwiXG59KVxuZXhwb3J0IGNsYXNzIFNhZmVVcmxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7XG4gICAgfVxuXG4gICAgdHJhbnNmb3JtKHVybDogc3RyaW5nKTogU2FmZVVybCB7XG4gICAgICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0VXJsKHVybCk7XG4gICAgfVxufSJdfQ==