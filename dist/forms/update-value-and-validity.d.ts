import { AbstractControl } from "@angular/forms";
export declare function updateValueAndValidity(controlOrControls: AbstractControl | AbstractControl[] | {
    [control: string]: AbstractControl;
}, opts?: {
    onlySelf?: boolean;
    emitEvent?: boolean;
    ommit?: AbstractControl[];
}): void;
