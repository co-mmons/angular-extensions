var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
//# sourceMappingURL=url-validator.js.map