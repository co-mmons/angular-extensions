import { __decorate, __param } from 'tslib';
import { ElementRef, Optional, Input, ContentChildren, Directive, NgModule } from '@angular/core';
import { FormControlName, NgForm, FormGroupDirective } from '@angular/forms';

let FormHelper = class FormHelper {
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
};
FormHelper.ctorParameters = () => [
    { type: ElementRef },
    { type: NgForm, decorators: [{ type: Optional }] },
    { type: FormGroupDirective, decorators: [{ type: Optional }] }
];
__decorate([
    Input()
], FormHelper.prototype, "readonly", null);
__decorate([
    Input()
], FormHelper.prototype, "busy", null);
__decorate([
    ContentChildren(FormControlName, { descendants: true })
], FormHelper.prototype, "contentControls", void 0);
FormHelper = __decorate([
    Directive({
        selector: "[ngx-form-helper],[ngxFormHelper]",
        exportAs: "ngxFormHelper"
    }),
    __param(1, Optional()), __param(2, Optional())
], FormHelper);
let FormHelperModule = class FormHelperModule {
};
FormHelperModule = __decorate([
    NgModule({
        declarations: [FormHelper],
        bootstrap: [],
        exports: [FormHelper]
    })
], FormHelperModule);

/**
 * Generated bundle index. Do not edit.
 */

export { FormHelper, FormHelperModule };
//# sourceMappingURL=commons-angular-extensions-browser-form-helper.js.map
