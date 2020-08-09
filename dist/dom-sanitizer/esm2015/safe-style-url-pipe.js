import { Pipe } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
export class SafeStyleUrlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustStyle(`url(${url})`);
    }
}
SafeStyleUrlPipe.decorators = [
    { type: Pipe, args: [{
                name: "safeStyleUrl"
            },] }
];
SafeStyleUrlPipe.ctorParameters = () => [
    { type: DomSanitizer }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FmZS1zdHlsZS11cmwtcGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20tc2FuaXRpemVyL3NhZmUtc3R5bGUtdXJsLXBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLElBQUksRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFDLFlBQVksRUFBWSxNQUFNLDJCQUEyQixDQUFDO0FBS2xFLE1BQU0sT0FBTyxnQkFBZ0I7SUFFekIsWUFBb0IsU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztJQUMzQyxDQUFDO0lBRUQsU0FBUyxDQUFDLEdBQVc7UUFDakIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7WUFWSixJQUFJLFNBQUM7Z0JBQ0YsSUFBSSxFQUFFLGNBQWM7YUFDdkI7OztZQUpPLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BpcGUsIFBpcGVUcmFuc2Zvcm19IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0RvbVNhbml0aXplciwgU2FmZVN0eWxlfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xuXG5AUGlwZSh7XG4gICAgbmFtZTogXCJzYWZlU3R5bGVVcmxcIlxufSlcbmV4cG9ydCBjbGFzcyBTYWZlU3R5bGVVcmxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7XG4gICAgfVxuXG4gICAgdHJhbnNmb3JtKHVybDogc3RyaW5nKTogU2FmZVN0eWxlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZShgdXJsKCR7dXJsfSlgKTtcbiAgICB9XG59XG4iXX0=