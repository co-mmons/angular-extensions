import { AbstractControl, ValidationErrors, Validator } from "@angular/forms";
export declare const urlValidatorProvider: any;
export declare class UrlValidator implements Validator {
    static validate(control: AbstractControl): ValidationErrors;
    validate(c: AbstractControl): ValidationErrors | null;
}
export declare class UrlValidatorModule {
}
