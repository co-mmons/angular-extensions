import { Pipe } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
export class SafeUrlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustUrl(url);
    }
}
SafeUrlPipe.decorators = [
    { type: Pipe, args: [{
                name: "safeUrl"
            },] }
];
SafeUrlPipe.ctorParameters = () => [
    { type: DomSanitizer }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FmZS11cmwtcGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20tc2FuaXRpemVyL3NhZmUtdXJsLXBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLElBQUksRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFDLFlBQVksRUFBVSxNQUFNLDJCQUEyQixDQUFDO0FBS2hFLE1BQU0sT0FBTyxXQUFXO0lBRXBCLFlBQW9CLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7SUFDM0MsQ0FBQztJQUVELFNBQVMsQ0FBQyxHQUFXO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7WUFWSixJQUFJLFNBQUM7Z0JBQ0YsSUFBSSxFQUFFLFNBQVM7YUFDbEI7OztZQUpPLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BpcGUsIFBpcGVUcmFuc2Zvcm19IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0RvbVNhbml0aXplciwgU2FmZVVybH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcblxuQFBpcGUoe1xuICAgIG5hbWU6IFwic2FmZVVybFwiXG59KVxuZXhwb3J0IGNsYXNzIFNhZmVVcmxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7XG4gICAgfVxuXG4gICAgdHJhbnNmb3JtKHVybDogc3RyaW5nKTogU2FmZVVybCB7XG4gICAgICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0VXJsKHVybCk7XG4gICAgfVxufVxuIl19