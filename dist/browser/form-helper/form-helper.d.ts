import { QueryList, ElementRef } from "@angular/core";
import { FormGroup, FormControlName, FormGroupDirective, NgForm } from "@angular/forms";
export declare class FormHelper {
    readonly element: ElementRef<HTMLElement>;
    readonly ngForm: NgForm;
    private readonly formGroupDirective;
    constructor(element: ElementRef<HTMLElement>, ngForm: NgForm, formGroupDirective: FormGroupDirective);
    get readonly(): boolean;
    set readonly(readonly: boolean);
    markAsReadonly(): void;
    get busy(): boolean;
    set busy(busy: boolean);
    markAsBusy(): void;
    protected readonly contentControls: QueryList<FormControlName>;
    formControlName(name: string): FormControlName;
    get formGroup(): FormGroup;
    validateAll(markAs?: "touched" | "dirty"): void;
    private focusImpl;
    focus(formControlName: string, scrollIntoView?: boolean): void;
}
export declare class FormHelperModule {
}
