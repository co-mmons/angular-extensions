import { Pipe } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
export class SafeHtmlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(key) {
        return this.sanitizer.bypassSecurityTrustHtml(key);
    }
}
SafeHtmlPipe.decorators = [
    { type: Pipe, args: [{
                name: "safeHtml"
            },] }
];
SafeHtmlPipe.ctorParameters = () => [
    { type: DomSanitizer }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FmZS1odG1sLXBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZG9tLXNhbml0aXplci9zYWZlLWh0bWwtcGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsSUFBSSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUMsWUFBWSxFQUFXLE1BQU0sMkJBQTJCLENBQUM7QUFLakUsTUFBTSxPQUFPLFlBQVk7SUFFckIsWUFBb0IsU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztJQUMzQyxDQUFDO0lBRUQsU0FBUyxDQUFDLEdBQVc7UUFDakIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7OztZQVZKLElBQUksU0FBQztnQkFDRixJQUFJLEVBQUUsVUFBVTthQUNuQjs7O1lBSk8sWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7RG9tU2FuaXRpemVyLCBTYWZlSHRtbH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcblxuQFBpcGUoe1xuICAgIG5hbWU6IFwic2FmZUh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBTYWZlSHRtbFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHtcbiAgICB9XG5cbiAgICB0cmFuc2Zvcm0oa2V5OiBzdHJpbmcpOiBTYWZlSHRtbCB7XG4gICAgICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChrZXkpO1xuICAgIH1cbn0iXX0=