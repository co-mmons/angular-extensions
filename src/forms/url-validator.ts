import {Directive, forwardRef, NgModule} from "@angular/core";
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";
import {MessageRef} from "@co.mmons/js-intl";

const urlValidatorRegex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/i;

export const urlValidator: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => UrlValidator),
    multi: true
};

@Directive({
    selector: '[url][formControlName],[url][formControl],[url][ngModel]',
    providers: [urlValidator]
})
export class UrlValidator implements Validator {

    static validate(control: AbstractControl): ValidationErrors {

        const value = control.value;

        if (urlValidatorRegex.test(value)) {
            return undefined;
        }

        return {
            invalidUrl: new MessageRef("@co.mmons/angular-extensions/forms", "invalidUrlError")
        };
    }

    validate(c: AbstractControl): ValidationErrors | null {
        return undefined;
    }

}

@NgModule({
    declarations: [UrlValidator],
    exports: [UrlValidator]
})
export class UrlValidatorModule {
}
