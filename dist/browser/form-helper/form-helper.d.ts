import { QueryList, ElementRef } from "@angular/core";
import { FormGroup, FormControlName, FormGroupDirective, NgForm } from "@angular/forms";
export declare class FormHelper {
    readonly element: ElementRef<HTMLElement>;
    readonly ngForm: NgForm;
    private readonly formGroupDirective;
    constructor(element: ElementRef<HTMLElement>, ngForm: NgForm, formGroupDirective: FormGroupDirective);
    readonly: boolean;
    markAsReadonly(): void;
    busy: boolean;
    markAsBusy(): void;
    protected readonly contentControls: QueryList<FormControlName>;
    formControlName(name: string): FormControlName;
    readonly formGroup: FormGroup;
    validateAll(markAs?: "touched" | "dirty"): void;
    private focusImpl;
    focus(formControlName: string, scrollIntoView?: boolean): void;
}
export declare class FormHelperModule {
}
