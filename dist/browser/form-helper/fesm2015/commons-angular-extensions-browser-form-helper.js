import { Directive, ElementRef, Optional, Input, ContentChildren, NgModule } from '@angular/core';
import { FormControlName, NgForm, FormGroupDirective } from '@angular/forms';

class FormHelper {
    constructor(element, ngForm, formGroupDirective) {
        this.element = element;
        this.ngForm = ngForm;
        this.formGroupDirective = formGroupDirective;
    }
    get readonly() {
        return this.element.nativeElement.hasAttribute("readonly");
    }
    set readonly(readonly) {
        if (readonly) {
            this.element.nativeElement.setAttribute("readonly", "");
        }
        else {
            this.element.nativeElement.removeAttribute("readonly");
        }
    }
    markAsReadonly() {
        this.readonly = true;
    }
    get busy() {
        return this.element.nativeElement.hasAttribute("busy");
    }
    set busy(busy) {
        if (busy) {
            this.element.nativeElement.setAttribute("busy", "");
        }
        else {
            this.element.nativeElement.removeAttribute("busy");
        }
    }
    markAsBusy() {
        this.busy = true;
    }
    formControlName(name) {
        for (let a of this.contentControls.toArray()) {
            if (a.name == name) {
                return a;
            }
        }
    }
    get formGroup() {
        return this.formGroupDirective ? this.formGroupDirective.form : undefined;
    }
    validateAll(markAs = "touched") {
        if (!this.formGroupDirective) {
            return;
        }
        for (let controlName in this.formGroup.controls) {
            let control = this.formGroup.controls[controlName];
            if (markAs == "touched") {
                control.markAsTouched();
            }
            if (markAs == "dirty") {
                control.markAsDirty();
            }
            control.updateValueAndValidity();
        }
        for (let control of this.contentControls.toArray()) {
            if (!control.valid) {
                this.focusImpl(control);
                break;
            }
        }
    }
    focusImpl(control, scrollIntoView = true) {
        if (typeof control == "string" && this.formGroupDirective) {
            for (let c of this.formGroupDirective.directives) {
                if (c.name == control) {
                    control = c;
                    break;
                }
            }
        }
        let elementToScroll;
        if (control instanceof FormControlName) {
            let element = this.element.nativeElement.querySelector("[formcontrolname=" + control.name + "]");
            if (element) {
                elementToScroll = element;
                element.focus();
            }
        }
        // if ("setFocus" in control) {
        //     control.setFocus();
        //     elementToScroll = control.getNativeElement().closest(".item");
        // } else if (control && typeof control.focus == "function") {
        //     control.focus();
        // }
        // if (!elementToScroll && control && control.nativeElement) {
        //     elementToScroll = control.nativeElement.closest(".item") || control.nativeElement;
        // }
        if (scrollIntoView && elementToScroll) {
            elementToScroll.scrollIntoView();
        }
    }
    focus(formControlName, scrollIntoView = true) {
        this.focusImpl(formControlName, scrollIntoView);
    }
}
FormHelper.decorators = [
    { type: Directive, args: [{
                selector: "[ngx-form-helper],[ngxFormHelper]",
                exportAs: "ngxFormHelper"
            },] }
];
FormHelper.ctorParameters = () => [
    { type: ElementRef },
    { type: NgForm, decorators: [{ type: Optional }] },
    { type: FormGroupDirective, decorators: [{ type: Optional }] }
];
FormHelper.propDecorators = {
    readonly: [{ type: Input }],
    busy: [{ type: Input }],
    contentControls: [{ type: ContentChildren, args: [FormControlName, { descendants: true },] }]
};
class FormHelperModule {
}
FormHelperModule.decorators = [
    { type: NgModule, args: [{
                declarations: [FormHelper],
                bootstrap: [],
                exports: [FormHelper]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { FormHelper, FormHelperModule };
//# sourceMappingURL=commons-angular-extensions-browser-form-helper.js.map
