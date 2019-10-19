import * as tslib_1 from "tslib";
import { NgModule, Directive, ContentChildren, QueryList, ElementRef, Input, Optional } from "@angular/core";
import { FormControlName, FormGroupDirective, NgForm } from "@angular/forms";
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
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], FormHelper.prototype, "readonly", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], FormHelper.prototype, "busy", null);
tslib_1.__decorate([
    ContentChildren(FormControlName, { descendants: true }),
    tslib_1.__metadata("design:type", QueryList)
], FormHelper.prototype, "contentControls", void 0);
FormHelper = tslib_1.__decorate([
    Directive({
        selector: "[ngx-form-helper],[ngxFormHelper]",
        exportAs: "ngxFormHelper"
    }),
    tslib_1.__param(1, Optional()), tslib_1.__param(2, Optional()),
    tslib_1.__metadata("design:paramtypes", [ElementRef, NgForm, FormGroupDirective])
], FormHelper);
export { FormHelper };
let FormHelperModule = class FormHelperModule {
};
FormHelperModule = tslib_1.__decorate([
    NgModule({
        declarations: [FormHelper],
        bootstrap: [],
        exports: [FormHelper]
    })
], FormHelperModule);
export { FormHelperModule };
//# sourceMappingURL=form-helper.js.map