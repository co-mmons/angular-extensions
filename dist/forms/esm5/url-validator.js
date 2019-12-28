import { __decorate } from "tslib";
import { Directive, forwardRef, NgModule } from "@angular/core";
import { NG_VALIDATORS } from "@angular/forms";
import { MessageRef } from "@co.mmons/js-intl";
var urlValidatorRegex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/i;
export var urlValidatorProvider = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(function () { return UrlValidator; }),
    multi: true
};
var UrlValidator = /** @class */ (function () {
    function UrlValidator() {
    }
    UrlValidator_1 = UrlValidator;
    UrlValidator.validate = function (control) {
        var value = control.value;
        if (urlValidatorRegex.test(value)) {
            return undefined;
        }
        return {
            invalidUrl: new MessageRef("@co.mmons/angular-extensions/forms", "invalidUrlError")
        };
    };
    UrlValidator.prototype.validate = function (c) {
        return UrlValidator_1.validate(c);
    };
    var UrlValidator_1;
    UrlValidator = UrlValidator_1 = __decorate([
        Directive({
            selector: '[url][formControlName],[url][formControl],[url][ngModel]',
            providers: [urlValidatorProvider]
        })
    ], UrlValidator);
    return UrlValidator;
}());
export { UrlValidator };
var UrlValidatorModule = /** @class */ (function () {
    function UrlValidatorModule() {
    }
    UrlValidatorModule = __decorate([
        NgModule({
            declarations: [UrlValidator],
            exports: [UrlValidator]
        })
    ], UrlValidatorModule);
    return UrlValidatorModule;
}());
export { UrlValidatorModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLXZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjby5tbW9ucy9hbmd1bGFyLWV4dGVuc2lvbnMvZm9ybXMvIiwic291cmNlcyI6WyJ1cmwtdmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFrQixhQUFhLEVBQThCLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0YsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBRTdDLElBQU0saUJBQWlCLEdBQUcsdUxBQXVMLENBQUM7QUFFbE4sTUFBTSxDQUFDLElBQU0sb0JBQW9CLEdBQVE7SUFDckMsT0FBTyxFQUFFLGFBQWE7SUFDdEIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsWUFBWSxFQUFaLENBQVksQ0FBQztJQUMzQyxLQUFLLEVBQUUsSUFBSTtDQUNkLENBQUM7QUFNRjtJQUFBO0lBbUJBLENBQUM7cUJBbkJZLFlBQVk7SUFFZCxxQkFBUSxHQUFmLFVBQWdCLE9BQXdCO1FBRXBDLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFFNUIsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDL0IsT0FBTyxTQUFTLENBQUM7U0FDcEI7UUFFRCxPQUFPO1lBQ0gsVUFBVSxFQUFFLElBQUksVUFBVSxDQUFDLG9DQUFvQyxFQUFFLGlCQUFpQixDQUFDO1NBQ3RGLENBQUM7SUFDTixDQUFDO0lBRUQsK0JBQVEsR0FBUixVQUFTLENBQWtCO1FBQ3ZCLE9BQU8sY0FBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDOztJQWpCUSxZQUFZO1FBSnhCLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSwwREFBMEQ7WUFDcEUsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7U0FDcEMsQ0FBQztPQUNXLFlBQVksQ0FtQnhCO0lBQUQsbUJBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQW5CWSxZQUFZO0FBeUJ6QjtJQUFBO0lBQ0EsQ0FBQztJQURZLGtCQUFrQjtRQUo5QixRQUFRLENBQUM7WUFDTixZQUFZLEVBQUUsQ0FBQyxZQUFZLENBQUM7WUFDNUIsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO1NBQzFCLENBQUM7T0FDVyxrQkFBa0IsQ0FDOUI7SUFBRCx5QkFBQztDQUFBLEFBREQsSUFDQztTQURZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBmb3J3YXJkUmVmLCBOZ01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7QWJzdHJhY3RDb250cm9sLCBOR19WQUxJREFUT1JTLCBWYWxpZGF0aW9uRXJyb3JzLCBWYWxpZGF0b3J9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtNZXNzYWdlUmVmfSBmcm9tIFwiQGNvLm1tb25zL2pzLWludGxcIjtcblxuY29uc3QgdXJsVmFsaWRhdG9yUmVnZXggPSAvKCgoW0EtWmEtel17Myw5fTooPzpcXC9cXC8pPykoPzpbXFwtOzomPVxcK1xcJCxcXHddK0ApP1tBLVphLXowLTlcXC5cXC1dK3woPzp3d3dcXC58W1xcLTs6Jj1cXCtcXCQsXFx3XStAKVtBLVphLXowLTlcXC5cXC1dKykoKD86XFwvW1xcK34lXFwvXFwuXFx3XFwtX10qKT9cXD8/KD86W1xcLVxcKz0mOyVAXFwuXFx3X10qKSM/KD86W1xcLlxcIVxcL1xcXFxcXHddKikpPykvaTtcblxuZXhwb3J0IGNvbnN0IHVybFZhbGlkYXRvclByb3ZpZGVyOiBhbnkgPSB7XG4gICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBVcmxWYWxpZGF0b3IpLFxuICAgIG11bHRpOiB0cnVlXG59O1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1t1cmxdW2Zvcm1Db250cm9sTmFtZV0sW3VybF1bZm9ybUNvbnRyb2xdLFt1cmxdW25nTW9kZWxdJyxcbiAgICBwcm92aWRlcnM6IFt1cmxWYWxpZGF0b3JQcm92aWRlcl1cbn0pXG5leHBvcnQgY2xhc3MgVXJsVmFsaWRhdG9yIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcblxuICAgIHN0YXRpYyB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHtcblxuICAgICAgICBjb25zdCB2YWx1ZSA9IGNvbnRyb2wudmFsdWU7XG5cbiAgICAgICAgaWYgKHVybFZhbGlkYXRvclJlZ2V4LnRlc3QodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGludmFsaWRVcmw6IG5ldyBNZXNzYWdlUmVmKFwiQGNvLm1tb25zL2FuZ3VsYXItZXh0ZW5zaW9ucy9mb3Jtc1wiLCBcImludmFsaWRVcmxFcnJvclwiKVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHZhbGlkYXRlKGM6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIFVybFZhbGlkYXRvci52YWxpZGF0ZShjKTtcbiAgICB9XG5cbn1cblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtVcmxWYWxpZGF0b3JdLFxuICAgIGV4cG9ydHM6IFtVcmxWYWxpZGF0b3JdXG59KVxuZXhwb3J0IGNsYXNzIFVybFZhbGlkYXRvck1vZHVsZSB7XG59XG4iXX0=