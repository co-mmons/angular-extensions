import { __values, __decorate } from 'tslib';
import { AbstractControl, FormGroup, FormArray, NG_VALIDATORS } from '@angular/forms';
import { forwardRef, Directive, NgModule } from '@angular/core';
import { MessageRef } from '@co.mmons/js-intl';

function updateValueAndValidity(controlOrControls, opts) {
    var e_1, _a, e_2, _b, e_3, _c;
    var controls;
    if (Array.isArray(controlOrControls)) {
        controls = controlOrControls;
    }
    else if (controlOrControls instanceof AbstractControl) {
        controls = [controlOrControls];
    }
    else if (controlOrControls) {
        controls = [];
        try {
            for (var _d = __values(Object.keys(controlOrControls)), _e = _d.next(); !_e.done; _e = _d.next()) {
                var k = _e.value;
                if (controlOrControls[k]) {
                    controls.push(controlOrControls[k]);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    try {
        CONTROLS: for (var controls_1 = __values(controls), controls_1_1 = controls_1.next(); !controls_1_1.done; controls_1_1 = controls_1.next()) {
            var control = controls_1_1.value;
            if (!control) {
                continue;
            }
            if (opts && opts.ommit) {
                try {
                    for (var _f = __values(opts.ommit), _g = _f.next(); !_g.done; _g = _f.next()) {
                        var c = _g.value;
                        if (c === control) {
                            continue CONTROLS;
                        }
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (_g && !_g.done && (_c = _f.return)) _c.call(_f);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            }
            if (!opts || !opts.onlySelf) {
                if (control instanceof FormGroup) {
                    var group = control;
                    for (var field in group.controls) {
                        updateValueAndValidity(group.controls[field], opts);
                    }
                }
                else if (control instanceof FormArray) {
                    var group = control;
                    for (var field in group.controls) {
                        var c = group.controls[field];
                        updateValueAndValidity(group.controls[field], opts);
                    }
                }
            }
            control.updateValueAndValidity(opts);
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (controls_1_1 && !controls_1_1.done && (_b = controls_1.return)) _b.call(controls_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
}

var urlValidatorRegex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/i;
var urlValidatorProvider = {
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

/**
 * Generated bundle index. Do not edit.
 */

export { UrlValidator, UrlValidatorModule, updateValueAndValidity, urlValidatorProvider };
//# sourceMappingURL=commons-angular-extensions-forms.js.map
