import { __decorate } from "tslib";
import { Pipe } from "@angular/core";
import { DomSanitizer, SafeStyle } from "@angular/platform-browser";
let SafeStyleUrlPipe = class SafeStyleUrlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustStyle(`url(${url})`);
    }
};
SafeStyleUrlPipe.ctorParameters = () => [
    { type: DomSanitizer }
];
SafeStyleUrlPipe = __decorate([
    Pipe({
        name: "safeStyleUrl"
    })
], SafeStyleUrlPipe);
export { SafeStyleUrlPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FmZS1zdHlsZS11cmwtcGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjby5tbW9ucy9hbmd1bGFyLWV4dGVuc2lvbnMvZG9tLXNhbml0aXplci8iLCJzb3VyY2VzIjpbInNhZmUtc3R5bGUtdXJsLXBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxJQUFJLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBQyxZQUFZLEVBQUUsU0FBUyxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFLbEUsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7SUFFekIsWUFBb0IsU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztJQUMzQyxDQUFDO0lBRUQsU0FBUyxDQUFDLEdBQVc7UUFDakIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNsRSxDQUFDO0NBQ0osQ0FBQTs7WUFOa0MsWUFBWTs7QUFGbEMsZ0JBQWdCO0lBSDVCLElBQUksQ0FBQztRQUNGLElBQUksRUFBRSxjQUFjO0tBQ3ZCLENBQUM7R0FDVyxnQkFBZ0IsQ0FRNUI7U0FSWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BpcGUsIFBpcGVUcmFuc2Zvcm19IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0RvbVNhbml0aXplciwgU2FmZVN0eWxlfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xuXG5AUGlwZSh7XG4gICAgbmFtZTogXCJzYWZlU3R5bGVVcmxcIlxufSlcbmV4cG9ydCBjbGFzcyBTYWZlU3R5bGVVcmxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7XG4gICAgfVxuXG4gICAgdHJhbnNmb3JtKHVybDogc3RyaW5nKTogU2FmZVN0eWxlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZShgdXJsKCR7dXJsfSlgKTtcbiAgICB9XG59XG4iXX0=