import { __decorate, __param } from "tslib";
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
export { FormHelper };
let FormHelperModule = class FormHelperModule {
};
FormHelperModule = __decorate([
    NgModule({
        declarations: [FormHelper],
        bootstrap: [],
        exports: [FormHelper]
    })
], FormHelperModule);
export { FormHelperModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1oZWxwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY28ubW1vbnMvYW5ndWxhci1leHRlbnNpb25zL2Jyb3dzZXIvZm9ybS1oZWxwZXIvIiwic291cmNlcyI6WyJmb3JtLWhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMzRyxPQUFPLEVBQUMsU0FBUyxFQUFFLGVBQWUsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLEVBQUUsNEJBQTRCLEVBQUUsZUFBZSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFNckksSUFBYSxVQUFVLEdBQXZCLE1BQWEsVUFBVTtJQUVuQixZQUE0QixPQUFnQyxFQUE4QixNQUFjLEVBQStCLGtCQUFzQztRQUFqSixZQUFPLEdBQVAsT0FBTyxDQUF5QjtRQUE4QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQStCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7SUFDN0ssQ0FBQztJQUdELElBQVcsUUFBUTtRQUNmLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCxJQUFXLFFBQVEsQ0FBQyxRQUFpQjtRQUNqQyxJQUFJLFFBQVEsRUFBRTtZQUNWLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDM0Q7YUFBTTtZQUNILElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUMxRDtJQUNMLENBQUM7SUFFTSxjQUFjO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUFHRCxJQUFXLElBQUk7UUFDWCxP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RTtZQUNuQyxlQUFlLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDcEM7SUFDTCxDQUFDO0lBRU0sS0FBSyxDQUFDLGVBQXVCLEVBQUUsaUJBQTBCLElBQUk7UUFDaEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDcEQsQ0FBQztDQUNKLENBQUE7O1lBekh3QyxVQUFVO1lBQW1ELE1BQU0sdUJBQXpDLFFBQVE7WUFBb0Ysa0JBQWtCLHVCQUFsRSxRQUFROztBQUluSDtJQURDLEtBQUssRUFBRTswQ0FHUDtBQWVEO0lBREMsS0FBSyxFQUFFO3NDQUdQO0FBZUQ7SUFEQyxlQUFlLENBQUMsZUFBZSxFQUFFLEVBQUMsV0FBVyxFQUFFLElBQUksRUFBQyxDQUFDO21EQUNTO0FBeEN0RCxVQUFVO0lBSnRCLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxtQ0FBbUM7UUFDN0MsUUFBUSxFQUFFLGVBQWU7S0FDNUIsQ0FBQztJQUdpRSxXQUFBLFFBQVEsRUFBRSxDQUFBLEVBQWtDLFdBQUEsUUFBUSxFQUFFLENBQUE7R0FGNUcsVUFBVSxDQTJIdEI7U0EzSFksVUFBVTtBQWtJdkIsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7Q0FDNUIsQ0FBQTtBQURZLGdCQUFnQjtJQUw1QixRQUFRLENBQUM7UUFDTixZQUFZLEVBQUUsQ0FBQyxVQUFVLENBQUM7UUFDMUIsU0FBUyxFQUFFLEVBQUU7UUFDYixPQUFPLEVBQUUsQ0FBQyxVQUFVLENBQUM7S0FDeEIsQ0FBQztHQUNXLGdCQUFnQixDQUM1QjtTQURZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsIERpcmVjdGl2ZSwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsIEVsZW1lbnRSZWYsIElucHV0LCBPcHRpb25hbH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Rm9ybUdyb3VwLCBGb3JtQ29udHJvbE5hbWUsIEZvcm1Hcm91cERpcmVjdGl2ZSwgTmdGb3JtLCBDaGVja2JveENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBBYnN0cmFjdENvbnRyb2x9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbbmd4LWZvcm0taGVscGVyXSxbbmd4Rm9ybUhlbHBlcl1cIixcbiAgICBleHBvcnRBczogXCJuZ3hGb3JtSGVscGVyXCJcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUhlbHBlciB7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgZWxlbWVudDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sIEBPcHRpb25hbCgpIHB1YmxpYyByZWFkb25seSBuZ0Zvcm06IE5nRm9ybSwgQE9wdGlvbmFsKCkgcHJpdmF0ZSByZWFkb25seSBmb3JtR3JvdXBEaXJlY3RpdmU6IEZvcm1Hcm91cERpcmVjdGl2ZSkge1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCByZWFkb25seSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50Lmhhc0F0dHJpYnV0ZShcInJlYWRvbmx5XCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgcmVhZG9ubHkocmVhZG9ubHk6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHJlYWRvbmx5KSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJyZWFkb25seVwiLCBcIlwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcInJlYWRvbmx5XCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG1hcmtBc1JlYWRvbmx5KCkge1xuICAgICAgICB0aGlzLnJlYWRvbmx5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgYnVzeSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50Lmhhc0F0dHJpYnV0ZShcImJ1c3lcIik7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBidXN5KGJ1c3k6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKGJ1c3kpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZShcImJ1c3lcIiwgXCJcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJidXN5XCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG1hcmtBc0J1c3koKSB7XG4gICAgICAgIHRoaXMuYnVzeSA9IHRydWU7XG4gICAgfVxuXG4gICAgQENvbnRlbnRDaGlsZHJlbihGb3JtQ29udHJvbE5hbWUsIHtkZXNjZW5kYW50czogdHJ1ZX0pXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGNvbnRlbnRDb250cm9sczogUXVlcnlMaXN0PEZvcm1Db250cm9sTmFtZT47XG5cbiAgICBwdWJsaWMgZm9ybUNvbnRyb2xOYW1lKG5hbWU6IHN0cmluZyk6IEZvcm1Db250cm9sTmFtZSB7XG5cbiAgICAgICAgZm9yIChsZXQgYSBvZiB0aGlzLmNvbnRlbnRDb250cm9scy50b0FycmF5KCkpIHtcbiAgICAgICAgICAgIGlmIChhLm5hbWUgPT0gbmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBmb3JtR3JvdXAoKTogRm9ybUdyb3VwIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybUdyb3VwRGlyZWN0aXZlID8gdGhpcy5mb3JtR3JvdXBEaXJlY3RpdmUuZm9ybSA6IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgdmFsaWRhdGVBbGwobWFya0FzOiBcInRvdWNoZWRcIiB8IFwiZGlydHlcIiA9IFwidG91Y2hlZFwiKSB7XG5cbiAgICAgICAgaWYgKCF0aGlzLmZvcm1Hcm91cERpcmVjdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgY29udHJvbE5hbWUgaW4gdGhpcy5mb3JtR3JvdXAuY29udHJvbHMpIHtcbiAgICAgICAgICAgIGxldCBjb250cm9sID0gdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbY29udHJvbE5hbWVdO1xuXG4gICAgICAgICAgICBpZiAobWFya0FzID09IFwidG91Y2hlZFwiKSB7XG4gICAgICAgICAgICAgICAgY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtYXJrQXMgPT0gXCJkaXJ0eVwiKSB7XG4gICAgICAgICAgICAgICAgY29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgY29udHJvbCBvZiB0aGlzLmNvbnRlbnRDb250cm9scy50b0FycmF5KCkpIHtcbiAgICAgICAgICAgIGlmICghY29udHJvbC52YWxpZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNJbXBsKGNvbnRyb2wpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmb2N1c0ltcGwoY29udHJvbDogc3RyaW5nIHwgYW55LCBzY3JvbGxJbnRvVmlldzogYm9vbGVhbiA9IHRydWUpIHtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRyb2wgPT0gXCJzdHJpbmdcIiAmJiB0aGlzLmZvcm1Hcm91cERpcmVjdGl2ZSkge1xuICAgICAgICAgICAgZm9yIChsZXQgYyBvZiB0aGlzLmZvcm1Hcm91cERpcmVjdGl2ZS5kaXJlY3RpdmVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGMubmFtZSA9PSBjb250cm9sKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2wgPSBjO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZWxlbWVudFRvU2Nyb2xsOiBIVE1MRWxlbWVudDtcblxuICAgICAgICBpZiAoY29udHJvbCBpbnN0YW5jZW9mIEZvcm1Db250cm9sTmFtZSkge1xuICAgICAgICAgICAgbGV0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihcIltmb3JtY29udHJvbG5hbWU9XCIgKyBjb250cm9sLm5hbWUgKyBcIl1cIik7XG4gICAgICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRUb1Njcm9sbCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgKFwic2V0Rm9jdXNcIiBpbiBjb250cm9sKSB7XG4gICAgICAgIC8vICAgICBjb250cm9sLnNldEZvY3VzKCk7XG4gICAgICAgIC8vICAgICBlbGVtZW50VG9TY3JvbGwgPSBjb250cm9sLmdldE5hdGl2ZUVsZW1lbnQoKS5jbG9zZXN0KFwiLml0ZW1cIik7XG4gICAgICAgIC8vIH0gZWxzZSBpZiAoY29udHJvbCAmJiB0eXBlb2YgY29udHJvbC5mb2N1cyA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgLy8gICAgIGNvbnRyb2wuZm9jdXMoKTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vIGlmICghZWxlbWVudFRvU2Nyb2xsICYmIGNvbnRyb2wgJiYgY29udHJvbC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgIC8vICAgICBlbGVtZW50VG9TY3JvbGwgPSBjb250cm9sLm5hdGl2ZUVsZW1lbnQuY2xvc2VzdChcIi5pdGVtXCIpIHx8IGNvbnRyb2wubmF0aXZlRWxlbWVudDtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGlmIChzY3JvbGxJbnRvVmlldyAmJiBlbGVtZW50VG9TY3JvbGwpIHtcbiAgICAgICAgICAgIGVsZW1lbnRUb1Njcm9sbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGZvY3VzKGZvcm1Db250cm9sTmFtZTogc3RyaW5nLCBzY3JvbGxJbnRvVmlldzogYm9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgdGhpcy5mb2N1c0ltcGwoZm9ybUNvbnRyb2xOYW1lLCBzY3JvbGxJbnRvVmlldyk7XG4gICAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW0Zvcm1IZWxwZXJdLFxuICAgIGJvb3RzdHJhcDogW10sXG4gICAgZXhwb3J0czogW0Zvcm1IZWxwZXJdXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1IZWxwZXJNb2R1bGUge1xufVxuIl19