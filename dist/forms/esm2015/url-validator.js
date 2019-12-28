var UrlValidator_1;
import { __decorate } from "tslib";
import { Directive, forwardRef, NgModule } from "@angular/core";
import { NG_VALIDATORS } from "@angular/forms";
import { MessageRef } from "@co.mmons/js-intl";
const urlValidatorRegex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/i;
export const urlValidatorProvider = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => UrlValidator),
    multi: true
};
let UrlValidator = UrlValidator_1 = class UrlValidator {
    static validate(control) {
        const value = control.value;
        if (urlValidatorRegex.test(value)) {
            return undefined;
        }
        return {
            invalidUrl: new MessageRef("@co.mmons/angular-extensions/forms", "invalidUrlError")
        };
    }
    validate(c) {
        return UrlValidator_1.validate(c);
    }
};
UrlValidator = UrlValidator_1 = __decorate([
    Directive({
        selector: '[url][formControlName],[url][formControl],[url][ngModel]',
        providers: [urlValidatorProvider]
    })
], UrlValidator);
export { UrlValidator };
let UrlValidatorModule = class UrlValidatorModule {
};
UrlValidatorModule = __decorate([
    NgModule({
        declarations: [UrlValidator],
        exports: [UrlValidator]
    })
], UrlValidatorModule);
export { UrlValidatorModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLXZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjby5tbW9ucy9hbmd1bGFyLWV4dGVuc2lvbnMvZm9ybXMvIiwic291cmNlcyI6WyJ1cmwtdmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBa0IsYUFBYSxFQUE4QixNQUFNLGdCQUFnQixDQUFDO0FBQzNGLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUU3QyxNQUFNLGlCQUFpQixHQUFHLHVMQUF1TCxDQUFDO0FBRWxOLE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFRO0lBQ3JDLE9BQU8sRUFBRSxhQUFhO0lBQ3RCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDO0lBQzNDLEtBQUssRUFBRSxJQUFJO0NBQ2QsQ0FBQztBQU1GLElBQWEsWUFBWSxvQkFBekIsTUFBYSxZQUFZO0lBRXJCLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBd0I7UUFFcEMsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUU1QixJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMvQixPQUFPLFNBQVMsQ0FBQztTQUNwQjtRQUVELE9BQU87WUFDSCxVQUFVLEVBQUUsSUFBSSxVQUFVLENBQUMsb0NBQW9DLEVBQUUsaUJBQWlCLENBQUM7U0FDdEYsQ0FBQztJQUNOLENBQUM7SUFFRCxRQUFRLENBQUMsQ0FBa0I7UUFDdkIsT0FBTyxjQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Q0FFSixDQUFBO0FBbkJZLFlBQVk7SUFKeEIsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLDBEQUEwRDtRQUNwRSxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztLQUNwQyxDQUFDO0dBQ1csWUFBWSxDQW1CeEI7U0FuQlksWUFBWTtBQXlCekIsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBa0I7Q0FDOUIsQ0FBQTtBQURZLGtCQUFrQjtJQUo5QixRQUFRLENBQUM7UUFDTixZQUFZLEVBQUUsQ0FBQyxZQUFZLENBQUM7UUFDNUIsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO0tBQzFCLENBQUM7R0FDVyxrQkFBa0IsQ0FDOUI7U0FEWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgZm9yd2FyZFJlZiwgTmdNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0Fic3RyYWN0Q29udHJvbCwgTkdfVkFMSURBVE9SUywgVmFsaWRhdGlvbkVycm9ycywgVmFsaWRhdG9yfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7TWVzc2FnZVJlZn0gZnJvbSBcIkBjby5tbW9ucy9qcy1pbnRsXCI7XG5cbmNvbnN0IHVybFZhbGlkYXRvclJlZ2V4ID0gLygoKFtBLVphLXpdezMsOX06KD86XFwvXFwvKT8pKD86W1xcLTs6Jj1cXCtcXCQsXFx3XStAKT9bQS1aYS16MC05XFwuXFwtXSt8KD86d3d3XFwufFtcXC07OiY9XFwrXFwkLFxcd10rQClbQS1aYS16MC05XFwuXFwtXSspKCg/OlxcL1tcXCt+JVxcL1xcLlxcd1xcLV9dKik/XFw/Pyg/OltcXC1cXCs9JjslQFxcLlxcd19dKikjPyg/OltcXC5cXCFcXC9cXFxcXFx3XSopKT8pL2k7XG5cbmV4cG9ydCBjb25zdCB1cmxWYWxpZGF0b3JQcm92aWRlcjogYW55ID0ge1xuICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVXJsVmFsaWRhdG9yKSxcbiAgICBtdWx0aTogdHJ1ZVxufTtcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbdXJsXVtmb3JtQ29udHJvbE5hbWVdLFt1cmxdW2Zvcm1Db250cm9sXSxbdXJsXVtuZ01vZGVsXScsXG4gICAgcHJvdmlkZXJzOiBbdXJsVmFsaWRhdG9yUHJvdmlkZXJdXG59KVxuZXhwb3J0IGNsYXNzIFVybFZhbGlkYXRvciBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XG5cbiAgICBzdGF0aWMgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB7XG5cbiAgICAgICAgY29uc3QgdmFsdWUgPSBjb250cm9sLnZhbHVlO1xuXG4gICAgICAgIGlmICh1cmxWYWxpZGF0b3JSZWdleC50ZXN0KHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbnZhbGlkVXJsOiBuZXcgTWVzc2FnZVJlZihcIkBjby5tbW9ucy9hbmd1bGFyLWV4dGVuc2lvbnMvZm9ybXNcIiwgXCJpbnZhbGlkVXJsRXJyb3JcIilcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZShjOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiBVcmxWYWxpZGF0b3IudmFsaWRhdGUoYyk7XG4gICAgfVxuXG59XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbVXJsVmFsaWRhdG9yXSxcbiAgICBleHBvcnRzOiBbVXJsVmFsaWRhdG9yXVxufSlcbmV4cG9ydCBjbGFzcyBVcmxWYWxpZGF0b3JNb2R1bGUge1xufVxuIl19