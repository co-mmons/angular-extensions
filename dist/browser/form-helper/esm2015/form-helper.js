import { NgModule, Directive, ContentChildren, ElementRef, Input, Optional } from "@angular/core";
import { FormControlName, FormGroupDirective, NgForm } from "@angular/forms";
export class FormHelper {
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
export class FormHelperModule {
}
FormHelperModule.decorators = [
    { type: NgModule, args: [{
                declarations: [FormHelper],
                bootstrap: [],
                exports: [FormHelper]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1oZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYnJvd3Nlci9mb3JtLWhlbHBlci9mb3JtLWhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQWEsVUFBVSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDM0csT0FBTyxFQUFZLGVBQWUsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLEVBQWdELE1BQU0sZ0JBQWdCLENBQUM7QUFNckksTUFBTSxPQUFPLFVBQVU7SUFFbkIsWUFBNEIsT0FBZ0MsRUFBOEIsTUFBYyxFQUErQixrQkFBc0M7UUFBakosWUFBTyxHQUFQLE9BQU8sQ0FBeUI7UUFBOEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUErQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO0lBQzdLLENBQUM7SUFFRCxJQUNXLFFBQVE7UUFDZixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsSUFBVyxRQUFRLENBQUMsUUFBaUI7UUFDakMsSUFBSSxRQUFRLEVBQUU7WUFDVixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQzNEO2FBQU07WUFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDMUQ7SUFDTCxDQUFDO0lBRU0sY0FBYztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUN6QixDQUFDO0lBRUQsSUFDVyxJQUFJO1FBQ1gsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJ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QUFFLGlCQUEwQixJQUFJO1FBQ2hFLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7OztZQTlISixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLG1DQUFtQztnQkFDN0MsUUFBUSxFQUFFLGVBQWU7YUFDNUI7OztZQU53RCxVQUFVO1lBQ1gsTUFBTSx1QkFRSyxRQUFRO1lBUnZDLGtCQUFrQix1QkFReUQsUUFBUTs7O3VCQUdsSCxLQUFLO21CQWlCTCxLQUFLOzhCQWlCTCxlQUFlLFNBQUMsZUFBZSxFQUFFLEVBQUMsV0FBVyxFQUFFLElBQUksRUFBQzs7QUEyRnpELE1BQU0sT0FBTyxnQkFBZ0I7OztZQUw1QixRQUFRLFNBQUM7Z0JBQ04sWUFBWSxFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUMxQixTQUFTLEVBQUUsRUFBRTtnQkFDYixPQUFPLEVBQUUsQ0FBQyxVQUFVLENBQUM7YUFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLCBEaXJlY3RpdmUsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBFbGVtZW50UmVmLCBJbnB1dCwgT3B0aW9uYWx9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0Zvcm1Hcm91cCwgRm9ybUNvbnRyb2xOYW1lLCBGb3JtR3JvdXBEaXJlY3RpdmUsIE5nRm9ybSwgQ2hlY2tib3hDb250cm9sVmFsdWVBY2Nlc3NvciwgQWJzdHJhY3RDb250cm9sfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwiW25neC1mb3JtLWhlbHBlcl0sW25neEZvcm1IZWxwZXJdXCIsXG4gICAgZXhwb3J0QXM6IFwibmd4Rm9ybUhlbHBlclwiXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1IZWxwZXIge1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IGVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LCBAT3B0aW9uYWwoKSBwdWJsaWMgcmVhZG9ubHkgbmdGb3JtOiBOZ0Zvcm0sIEBPcHRpb25hbCgpIHByaXZhdGUgcmVhZG9ubHkgZm9ybUdyb3VwRGlyZWN0aXZlOiBGb3JtR3JvdXBEaXJlY3RpdmUpIHtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgcmVhZG9ubHkoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJyZWFkb25seVwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHJlYWRvbmx5KHJlYWRvbmx5OiBib29sZWFuKSB7XG4gICAgICAgIGlmIChyZWFkb25seSkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwicmVhZG9ubHlcIiwgXCJcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJyZWFkb25seVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBtYXJrQXNSZWFkb25seSgpIHtcbiAgICAgICAgdGhpcy5yZWFkb25seSA9IHRydWU7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGJ1c3koKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJidXN5XCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgYnVzeShidXN5OiBib29sZWFuKSB7XG4gICAgICAgIGlmIChidXN5KSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJidXN5XCIsIFwiXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwiYnVzeVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBtYXJrQXNCdXN5KCkge1xuICAgICAgICB0aGlzLmJ1c3kgPSB0cnVlO1xuICAgIH1cblxuICAgIEBDb250ZW50Q2hpbGRyZW4oRm9ybUNvbnRyb2xOYW1lLCB7ZGVzY2VuZGFudHM6IHRydWV9KVxuICAgIHByb3RlY3RlZCByZWFkb25seSBjb250ZW50Q29udHJvbHM6IFF1ZXJ5TGlzdDxGb3JtQ29udHJvbE5hbWU+O1xuXG4gICAgcHVibGljIGZvcm1Db250cm9sTmFtZShuYW1lOiBzdHJpbmcpOiBGb3JtQ29udHJvbE5hbWUge1xuXG4gICAgICAgIGZvciAobGV0IGEgb2YgdGhpcy5jb250ZW50Q29udHJvbHMudG9BcnJheSgpKSB7XG4gICAgICAgICAgICBpZiAoYS5uYW1lID09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZm9ybUdyb3VwKCk6IEZvcm1Hcm91cCB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1Hcm91cERpcmVjdGl2ZSA/IHRoaXMuZm9ybUdyb3VwRGlyZWN0aXZlLmZvcm0gOiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHZhbGlkYXRlQWxsKG1hcmtBczogXCJ0b3VjaGVkXCIgfCBcImRpcnR5XCIgPSBcInRvdWNoZWRcIikge1xuXG4gICAgICAgIGlmICghdGhpcy5mb3JtR3JvdXBEaXJlY3RpdmUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGNvbnRyb2xOYW1lIGluIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzKSB7XG4gICAgICAgICAgICBsZXQgY29udHJvbCA9IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2NvbnRyb2xOYW1lXTtcblxuICAgICAgICAgICAgaWYgKG1hcmtBcyA9PSBcInRvdWNoZWRcIikge1xuICAgICAgICAgICAgICAgIGNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobWFya0FzID09IFwiZGlydHlcIikge1xuICAgICAgICAgICAgICAgIGNvbnRyb2wubWFya0FzRGlydHkoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGNvbnRyb2wgb2YgdGhpcy5jb250ZW50Q29udHJvbHMudG9BcnJheSgpKSB7XG4gICAgICAgICAgICBpZiAoIWNvbnRyb2wudmFsaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzSW1wbChjb250cm9sKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZm9jdXNJbXBsKGNvbnRyb2w6IHN0cmluZyB8IGFueSwgc2Nyb2xsSW50b1ZpZXc6IGJvb2xlYW4gPSB0cnVlKSB7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb250cm9sID09IFwic3RyaW5nXCIgJiYgdGhpcy5mb3JtR3JvdXBEaXJlY3RpdmUpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGMgb2YgdGhpcy5mb3JtR3JvdXBEaXJlY3RpdmUuZGlyZWN0aXZlcykge1xuICAgICAgICAgICAgICAgIGlmIChjLm5hbWUgPT0gY29udHJvbCkge1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sID0gYztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGVsZW1lbnRUb1Njcm9sbDogSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKGNvbnRyb2wgaW5zdGFuY2VvZiBGb3JtQ29udHJvbE5hbWUpIHtcbiAgICAgICAgICAgIGxldCBlbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZm9ybWNvbnRyb2xuYW1lPVwiICsgY29udHJvbC5uYW1lICsgXCJdXCIpO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50VG9TY3JvbGwgPSBlbGVtZW50O1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIChcInNldEZvY3VzXCIgaW4gY29udHJvbCkge1xuICAgICAgICAvLyAgICAgY29udHJvbC5zZXRGb2N1cygpO1xuICAgICAgICAvLyAgICAgZWxlbWVudFRvU2Nyb2xsID0gY29udHJvbC5nZXROYXRpdmVFbGVtZW50KCkuY2xvc2VzdChcIi5pdGVtXCIpO1xuICAgICAgICAvLyB9IGVsc2UgaWYgKGNvbnRyb2wgJiYgdHlwZW9mIGNvbnRyb2wuZm9jdXMgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIC8vICAgICBjb250cm9sLmZvY3VzKCk7XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyBpZiAoIWVsZW1lbnRUb1Njcm9sbCAmJiBjb250cm9sICYmIGNvbnRyb2wubmF0aXZlRWxlbWVudCkge1xuICAgICAgICAvLyAgICAgZWxlbWVudFRvU2Nyb2xsID0gY29udHJvbC5uYXRpdmVFbGVtZW50LmNsb3Nlc3QoXCIuaXRlbVwiKSB8fCBjb250cm9sLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIC8vIH1cblxuICAgICAgICBpZiAoc2Nyb2xsSW50b1ZpZXcgJiYgZWxlbWVudFRvU2Nyb2xsKSB7XG4gICAgICAgICAgICBlbGVtZW50VG9TY3JvbGwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBmb2N1cyhmb3JtQ29udHJvbE5hbWU6IHN0cmluZywgc2Nyb2xsSW50b1ZpZXc6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHRoaXMuZm9jdXNJbXBsKGZvcm1Db250cm9sTmFtZSwgc2Nyb2xsSW50b1ZpZXcpO1xuICAgIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtGb3JtSGVscGVyXSxcbiAgICBib290c3RyYXA6IFtdLFxuICAgIGV4cG9ydHM6IFtGb3JtSGVscGVyXVxufSlcbmV4cG9ydCBjbGFzcyBGb3JtSGVscGVyTW9kdWxlIHtcbn1cbiJdfQ==