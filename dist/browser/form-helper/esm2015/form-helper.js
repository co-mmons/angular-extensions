import * as tslib_1 from "tslib";
import { NgModule, Directive, ContentChildren, QueryList, ElementRef, Input, Optional } from "@angular/core";
import { FormGroup, FormControlName, FormGroupDirective, NgForm, CheckboxControlValueAccessor, AbstractControl } from "@angular/forms";
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
tslib_1.__decorate([
    Input()
], FormHelper.prototype, "readonly", null);
tslib_1.__decorate([
    Input()
], FormHelper.prototype, "busy", null);
tslib_1.__decorate([
    ContentChildren(FormControlName, { descendants: true })
], FormHelper.prototype, "contentControls", void 0);
FormHelper = tslib_1.__decorate([
    Directive({
        selector: "[ngx-form-helper],[ngxFormHelper]",
        exportAs: "ngxFormHelper"
    }),
    tslib_1.__param(1, Optional()), tslib_1.__param(2, Optional())
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1oZWxwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY28ubW1vbnMvYW5ndWxhci1leHRlbnNpb25zL2Jyb3dzZXIvZm9ybS1oZWxwZXIvIiwic291cmNlcyI6WyJmb3JtLWhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMzRyxPQUFPLEVBQUMsU0FBUyxFQUFFLGVBQWUsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLEVBQUUsNEJBQTRCLEVBQUUsZUFBZSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFNckksSUFBYSxVQUFVLEdBQXZCLE1BQWEsVUFBVTtJQUVuQixZQUE0QixPQUFnQyxFQUE4QixNQUFjLEVBQStCLGtCQUFzQztRQUFqSixZQUFPLEdBQVAsT0FBTyxDQUF5QjtRQUE4QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQStCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7SUFDN0ssQ0FBQztJQUdELElBQVcsUUFBUTtRQUNmLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCxJQUFXLFFBQVEsQ0FBQyxRQUFpQjtRQUNqQyxJQUFJLFFBQVEsRUFBRTtZQUNWLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDM0Q7YUFBTTtZQUNILElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUMxRDtJQUNMLENBQUM7SUFFTSxjQUFjO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUFHRCxJQUFXLElBQUk7UUFDWCxP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RTtZQUNuQyxlQUFlLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDcEM7SUFDTCxDQUFDO0lBRU0sS0FBSyxDQUFDLGVBQXVCLEVBQUUsaUJBQTBCLElBQUk7UUFDaEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDcEQsQ0FBQztDQUNKLENBQUE7O1lBekh3QyxVQUFVO1lBQW1ELE1BQU0sdUJBQXpDLFFBQVE7WUFBb0Ysa0JBQWtCLHVCQUFsRSxRQUFROztBQUluSDtJQURDLEtBQUssRUFBRTswQ0FHUDtBQWVEO0lBREMsS0FBSyxFQUFFO3NDQUdQO0FBZUQ7SUFEQyxlQUFlLENBQUMsZUFBZSxFQUFFLEVBQUMsV0FBVyxFQUFFLElBQUksRUFBQyxDQUFDO21EQUNTO0FBeEN0RCxVQUFVO0lBSnRCLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxtQ0FBbUM7UUFDN0MsUUFBUSxFQUFFLGVBQWU7S0FDNUIsQ0FBQztJQUdpRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFrQyxtQkFBQSxRQUFRLEVBQUUsQ0FBQTtHQUY1RyxVQUFVLENBMkh0QjtTQTNIWSxVQUFVO0FBa0l2QixJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtDQUM1QixDQUFBO0FBRFksZ0JBQWdCO0lBTDVCLFFBQVEsQ0FBQztRQUNOLFlBQVksRUFBRSxDQUFDLFVBQVUsQ0FBQztRQUMxQixTQUFTLEVBQUUsRUFBRTtRQUNiLE9BQU8sRUFBRSxDQUFDLFVBQVUsQ0FBQztLQUN4QixDQUFDO0dBQ1csZ0JBQWdCLENBQzVCO1NBRFksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSwgRGlyZWN0aXZlLCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgRWxlbWVudFJlZiwgSW5wdXQsIE9wdGlvbmFsfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtGb3JtR3JvdXAsIEZvcm1Db250cm9sTmFtZSwgRm9ybUdyb3VwRGlyZWN0aXZlLCBOZ0Zvcm0sIENoZWNrYm94Q29udHJvbFZhbHVlQWNjZXNzb3IsIEFic3RyYWN0Q29udHJvbH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcIltuZ3gtZm9ybS1oZWxwZXJdLFtuZ3hGb3JtSGVscGVyXVwiLFxuICAgIGV4cG9ydEFzOiBcIm5neEZvcm1IZWxwZXJcIlxufSlcbmV4cG9ydCBjbGFzcyBGb3JtSGVscGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBlbGVtZW50OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PiwgQE9wdGlvbmFsKCkgcHVibGljIHJlYWRvbmx5IG5nRm9ybTogTmdGb3JtLCBAT3B0aW9uYWwoKSBwcml2YXRlIHJlYWRvbmx5IGZvcm1Hcm91cERpcmVjdGl2ZTogRm9ybUdyb3VwRGlyZWN0aXZlKSB7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IHJlYWRvbmx5KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuaGFzQXR0cmlidXRlKFwicmVhZG9ubHlcIik7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCByZWFkb25seShyZWFkb25seTogYm9vbGVhbikge1xuICAgICAgICBpZiAocmVhZG9ubHkpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZShcInJlYWRvbmx5XCIsIFwiXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwicmVhZG9ubHlcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgbWFya0FzUmVhZG9ubHkoKSB7XG4gICAgICAgIHRoaXMucmVhZG9ubHkgPSB0cnVlO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBidXN5KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuaGFzQXR0cmlidXRlKFwiYnVzeVwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGJ1c3koYnVzeTogYm9vbGVhbikge1xuICAgICAgICBpZiAoYnVzeSkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwiYnVzeVwiLCBcIlwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImJ1c3lcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgbWFya0FzQnVzeSgpIHtcbiAgICAgICAgdGhpcy5idXN5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBAQ29udGVudENoaWxkcmVuKEZvcm1Db250cm9sTmFtZSwge2Rlc2NlbmRhbnRzOiB0cnVlfSlcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgY29udGVudENvbnRyb2xzOiBRdWVyeUxpc3Q8Rm9ybUNvbnRyb2xOYW1lPjtcblxuICAgIHB1YmxpYyBmb3JtQ29udHJvbE5hbWUobmFtZTogc3RyaW5nKTogRm9ybUNvbnRyb2xOYW1lIHtcblxuICAgICAgICBmb3IgKGxldCBhIG9mIHRoaXMuY29udGVudENvbnRyb2xzLnRvQXJyYXkoKSkge1xuICAgICAgICAgICAgaWYgKGEubmFtZSA9PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGZvcm1Hcm91cCgpOiBGb3JtR3JvdXAge1xuICAgICAgICByZXR1cm4gdGhpcy5mb3JtR3JvdXBEaXJlY3RpdmUgPyB0aGlzLmZvcm1Hcm91cERpcmVjdGl2ZS5mb3JtIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHB1YmxpYyB2YWxpZGF0ZUFsbChtYXJrQXM6IFwidG91Y2hlZFwiIHwgXCJkaXJ0eVwiID0gXCJ0b3VjaGVkXCIpIHtcblxuICAgICAgICBpZiAoIXRoaXMuZm9ybUdyb3VwRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBjb250cm9sTmFtZSBpbiB0aGlzLmZvcm1Hcm91cC5jb250cm9scykge1xuICAgICAgICAgICAgbGV0IGNvbnRyb2wgPSB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tjb250cm9sTmFtZV07XG5cbiAgICAgICAgICAgIGlmIChtYXJrQXMgPT0gXCJ0b3VjaGVkXCIpIHtcbiAgICAgICAgICAgICAgICBjb250cm9sLm1hcmtBc1RvdWNoZWQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1hcmtBcyA9PSBcImRpcnR5XCIpIHtcbiAgICAgICAgICAgICAgICBjb250cm9sLm1hcmtBc0RpcnR5KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBjb250cm9sIG9mIHRoaXMuY29udGVudENvbnRyb2xzLnRvQXJyYXkoKSkge1xuICAgICAgICAgICAgaWYgKCFjb250cm9sLnZhbGlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c0ltcGwoY29udHJvbCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGZvY3VzSW1wbChjb250cm9sOiBzdHJpbmcgfCBhbnksIHNjcm9sbEludG9WaWV3OiBib29sZWFuID0gdHJ1ZSkge1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udHJvbCA9PSBcInN0cmluZ1wiICYmIHRoaXMuZm9ybUdyb3VwRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBjIG9mIHRoaXMuZm9ybUdyb3VwRGlyZWN0aXZlLmRpcmVjdGl2ZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoYy5uYW1lID09IGNvbnRyb2wpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbCA9IGM7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBlbGVtZW50VG9TY3JvbGw6IEhUTUxFbGVtZW50O1xuXG4gICAgICAgIGlmIChjb250cm9sIGluc3RhbmNlb2YgRm9ybUNvbnRyb2xOYW1lKSB7XG4gICAgICAgICAgICBsZXQgZWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiW2Zvcm1jb250cm9sbmFtZT1cIiArIGNvbnRyb2wubmFtZSArIFwiXVwiKTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudFRvU2Nyb2xsID0gZWxlbWVudDtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiAoXCJzZXRGb2N1c1wiIGluIGNvbnRyb2wpIHtcbiAgICAgICAgLy8gICAgIGNvbnRyb2wuc2V0Rm9jdXMoKTtcbiAgICAgICAgLy8gICAgIGVsZW1lbnRUb1Njcm9sbCA9IGNvbnRyb2wuZ2V0TmF0aXZlRWxlbWVudCgpLmNsb3Nlc3QoXCIuaXRlbVwiKTtcbiAgICAgICAgLy8gfSBlbHNlIGlmIChjb250cm9sICYmIHR5cGVvZiBjb250cm9sLmZvY3VzID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAvLyAgICAgY29udHJvbC5mb2N1cygpO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gaWYgKCFlbGVtZW50VG9TY3JvbGwgJiYgY29udHJvbCAmJiBjb250cm9sLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgLy8gICAgIGVsZW1lbnRUb1Njcm9sbCA9IGNvbnRyb2wubmF0aXZlRWxlbWVudC5jbG9zZXN0KFwiLml0ZW1cIikgfHwgY29udHJvbC5uYXRpdmVFbGVtZW50O1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgaWYgKHNjcm9sbEludG9WaWV3ICYmIGVsZW1lbnRUb1Njcm9sbCkge1xuICAgICAgICAgICAgZWxlbWVudFRvU2Nyb2xsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZm9jdXMoZm9ybUNvbnRyb2xOYW1lOiBzdHJpbmcsIHNjcm9sbEludG9WaWV3OiBib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmZvY3VzSW1wbChmb3JtQ29udHJvbE5hbWUsIHNjcm9sbEludG9WaWV3KTtcbiAgICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbRm9ybUhlbHBlcl0sXG4gICAgYm9vdHN0cmFwOiBbXSxcbiAgICBleHBvcnRzOiBbRm9ybUhlbHBlcl1cbn0pXG5leHBvcnQgY2xhc3MgRm9ybUhlbHBlck1vZHVsZSB7XG59XG4iXX0=