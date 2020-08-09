import { AbstractControl, FormGroup, FormArray, NG_VALIDATORS } from '@angular/forms';
import { forwardRef, Directive, NgModule } from '@angular/core';
import { MessageRef } from '@co.mmons/js-intl';

function updateValueAndValidity(controlOrControls, opts) {
    let controls;
    if (Array.isArray(controlOrControls)) {
        controls = controlOrControls;
    }
    else if (controlOrControls instanceof AbstractControl) {
        controls = [controlOrControls];
    }
    else if (controlOrControls) {
        controls = [];
        for (const k of Object.keys(controlOrControls)) {
            if (controlOrControls[k]) {
                controls.push(controlOrControls[k]);
            }
        }
    }
    CONTROLS: for (const control of controls) {
        if (!control) {
            continue;
        }
        if (opts && opts.ommit) {
            for (const c of opts.ommit) {
                if (c === control) {
                    continue CONTROLS;
                }
            }
        }
        if (!opts || !opts.onlySelf) {
            if (control instanceof FormGroup) {
                const group = control;
                for (const field in group.controls) {
                    updateValueAndValidity(group.controls[field], opts);
                }
            }
            else if (control instanceof FormArray) {
                const group = control;
                for (const field in group.controls) {
                    const c = group.controls[field];
                    updateValueAndValidity(group.controls[field], opts);
                }
            }
        }
        control.updateValueAndValidity(opts);
    }
}

const urlValidatorRegex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/i;
const urlValidatorProvider = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => UrlValidator),
    multi: true
};
class UrlValidator {
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
        return UrlValidator.validate(c);
    }
}
UrlValidator.decorators = [
    { type: Directive, args: [{
                selector: '[url][formControlName],[url][formControl],[url][ngModel]',
                providers: [urlValidatorProvider]
            },] }
];
class UrlValidatorModule {
}
UrlValidatorModule.decorators = [
    { type: NgModule, args: [{
                declarations: [UrlValidator],
                exports: [UrlValidator]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { UrlValidator, UrlValidatorModule, updateValueAndValidity, urlValidatorProvider };
//# sourceMappingURL=commons-angular-extensions-forms.js.map
