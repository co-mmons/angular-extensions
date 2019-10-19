import * as tslib_1 from "tslib";
var UrlValidator_1;
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
UrlValidator = UrlValidator_1 = tslib_1.__decorate([
    Directive({
        selector: '[url][formControlName],[url][formControl],[url][ngModel]',
        providers: [urlValidatorProvider]
    })
], UrlValidator);
export { UrlValidator };
let UrlValidatorModule = class UrlValidatorModule {
};
UrlValidatorModule = tslib_1.__decorate([
    NgModule({
        declarations: [UrlValidator],
        exports: [UrlValidator]
    })
], UrlValidatorModule);
export { UrlValidatorModule };
//# sourceMappingURL=url-validator.js.map