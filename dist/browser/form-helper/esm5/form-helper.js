import * as tslib_1 from "tslib";
import { NgModule, Directive, ContentChildren, QueryList, ElementRef, Input, Optional } from "@angular/core";
import { FormGroup, FormControlName, FormGroupDirective, NgForm, CheckboxControlValueAccessor, AbstractControl } from "@angular/forms";
var FormHelper = /** @class */ (function () {
    function FormHelper(element, ngForm, formGroupDirective) {
        this.element = element;
        this.ngForm = ngForm;
        this.formGroupDirective = formGroupDirective;
    }
    Object.defineProperty(FormHelper.prototype, "readonly", {
        get: function () {
            return this.element.nativeElement.hasAttribute("readonly");
        },
        set: function (readonly) {
            if (readonly) {
                this.element.nativeElement.setAttribute("readonly", "");
            }
            else {
                this.element.nativeElement.removeAttribute("readonly");
            }
        },
        enumerable: true,
        configurable: true
    });
    FormHelper.prototype.markAsReadonly = function () {
        this.readonly = true;
    };
    Object.defineProperty(FormHelper.prototype, "busy", {
        get: function () {
            return this.element.nativeElement.hasAttribute("busy");
        },
        set: function (busy) {
            if (busy) {
                this.element.nativeElement.setAttribute("busy", "");
            }
            else {
                this.element.nativeElement.removeAttribute("busy");
            }
        },
        enumerable: true,
        configurable: true
    });
    FormHelper.prototype.markAsBusy = function () {
        this.busy = true;
    };
    FormHelper.prototype.formControlName = function (name) {
        var e_1, _a;
        try {
            for (var _b = tslib_1.__values(this.contentControls.toArray()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var a = _c.value;
                if (a.name == name) {
                    return a;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    Object.defineProperty(FormHelper.prototype, "formGroup", {
        get: function () {
            return this.formGroupDirective ? this.formGroupDirective.form : undefined;
        },
        enumerable: true,
        configurable: true
    });
    FormHelper.prototype.validateAll = function (markAs) {
        var e_2, _a;
        if (markAs === void 0) { markAs = "touched"; }
        if (!this.formGroupDirective) {
            return;
        }
        for (var controlName in this.formGroup.controls) {
            var control = this.formGroup.controls[controlName];
            if (markAs == "touched") {
                control.markAsTouched();
            }
            if (markAs == "dirty") {
                control.markAsDirty();
            }
            control.updateValueAndValidity();
        }
        try {
            for (var _b = tslib_1.__values(this.contentControls.toArray()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var control = _c.value;
                if (!control.valid) {
                    this.focusImpl(control);
                    break;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    FormHelper.prototype.focusImpl = function (control, scrollIntoView) {
        var e_3, _a;
        if (scrollIntoView === void 0) { scrollIntoView = true; }
        if (typeof control == "string" && this.formGroupDirective) {
            try {
                for (var _b = tslib_1.__values(this.formGroupDirective.directives), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var c = _c.value;
                    if (c.name == control) {
                        control = c;
                        break;
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
        var elementToScroll;
        if (control instanceof FormControlName) {
            var element = this.element.nativeElement.querySelector("[formcontrolname=" + control.name + "]");
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
    };
    FormHelper.prototype.focus = function (formControlName, scrollIntoView) {
        if (scrollIntoView === void 0) { scrollIntoView = true; }
        this.focusImpl(formControlName, scrollIntoView);
    };
    FormHelper.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgForm, decorators: [{ type: Optional }] },
        { type: FormGroupDirective, decorators: [{ type: Optional }] }
    ]; };
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
    return FormHelper;
}());
export { FormHelper };
var FormHelperModule = /** @class */ (function () {
    function FormHelperModule() {
    }
    FormHelperModule = tslib_1.__decorate([
        NgModule({
            declarations: [FormHelper],
            bootstrap: [],
            exports: [FormHelper]
        })
    ], FormHelperModule);
    return FormHelperModule;
}());
export { FormHelperModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1oZWxwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY28ubW1vbnMvYW5ndWxhci1leHRlbnNpb25zL2Jyb3dzZXIvZm9ybS1oZWxwZXIvIiwic291cmNlcyI6WyJmb3JtLWhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMzRyxPQUFPLEVBQUMsU0FBUyxFQUFFLGVBQWUsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLEVBQUUsNEJBQTRCLEVBQUUsZUFBZSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFNckk7SUFFSSxvQkFBNEIsT0FBZ0MsRUFBOEIsTUFBYyxFQUErQixrQkFBc0M7UUFBakosWUFBTyxHQUFQLE9BQU8sQ0FBeUI7UUFBOEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUErQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO0lBQzdLLENBQUM7SUFHRCxzQkFBVyxnQ0FBUTthQUFuQjtZQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9ELENBQUM7YUFFRCxVQUFvQixRQUFpQjtZQUNqQyxJQUFJLFFBQVEsRUFBRTtnQkFDVixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQzNEO2lCQUFNO2dCQUNILElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUMxRDtRQUNMLENBQUM7OztPQVJBO0lBVU0sbUNBQWMsR0FBckI7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUN6QixDQUFDO0lBR0Qsc0JBQVcsNEJBQUk7YUFBZjtZQUNJLE9BQU8s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QUN4QixDQUFDO09BQ1csZ0JBQWdCLENBQzVCO0lBQUQsdUJBQUM7Q0FBQSxBQURELElBQ0M7U0FEWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLCBEaXJlY3RpdmUsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBFbGVtZW50UmVmLCBJbnB1dCwgT3B0aW9uYWx9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0Zvcm1Hcm91cCwgRm9ybUNvbnRyb2xOYW1lLCBGb3JtR3JvdXBEaXJlY3RpdmUsIE5nRm9ybSwgQ2hlY2tib3hDb250cm9sVmFsdWVBY2Nlc3NvciwgQWJzdHJhY3RDb250cm9sfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwiW25neC1mb3JtLWhlbHBlcl0sW25neEZvcm1IZWxwZXJdXCIsXG4gICAgZXhwb3J0QXM6IFwibmd4Rm9ybUhlbHBlclwiXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1IZWxwZXIge1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IGVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LCBAT3B0aW9uYWwoKSBwdWJsaWMgcmVhZG9ubHkgbmdGb3JtOiBOZ0Zvcm0sIEBPcHRpb25hbCgpIHByaXZhdGUgcmVhZG9ubHkgZm9ybUdyb3VwRGlyZWN0aXZlOiBGb3JtR3JvdXBEaXJlY3RpdmUpIHtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgcmVhZG9ubHkoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJyZWFkb25seVwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHJlYWRvbmx5KHJlYWRvbmx5OiBib29sZWFuKSB7XG4gICAgICAgIGlmIChyZWFkb25seSkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwicmVhZG9ubHlcIiwgXCJcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJyZWFkb25seVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBtYXJrQXNSZWFkb25seSgpIHtcbiAgICAgICAgdGhpcy5yZWFkb25seSA9IHRydWU7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGJ1c3koKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJidXN5XCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgYnVzeShidXN5OiBib29sZWFuKSB7XG4gICAgICAgIGlmIChidXN5KSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJidXN5XCIsIFwiXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwiYnVzeVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBtYXJrQXNCdXN5KCkge1xuICAgICAgICB0aGlzLmJ1c3kgPSB0cnVlO1xuICAgIH1cblxuICAgIEBDb250ZW50Q2hpbGRyZW4oRm9ybUNvbnRyb2xOYW1lLCB7ZGVzY2VuZGFudHM6IHRydWV9KVxuICAgIHByb3RlY3RlZCByZWFkb25seSBjb250ZW50Q29udHJvbHM6IFF1ZXJ5TGlzdDxGb3JtQ29udHJvbE5hbWU+O1xuXG4gICAgcHVibGljIGZvcm1Db250cm9sTmFtZShuYW1lOiBzdHJpbmcpOiBGb3JtQ29udHJvbE5hbWUge1xuXG4gICAgICAgIGZvciAobGV0IGEgb2YgdGhpcy5jb250ZW50Q29udHJvbHMudG9BcnJheSgpKSB7XG4gICAgICAgICAgICBpZiAoYS5uYW1lID09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZm9ybUdyb3VwKCk6IEZvcm1Hcm91cCB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1Hcm91cERpcmVjdGl2ZSA/IHRoaXMuZm9ybUdyb3VwRGlyZWN0aXZlLmZvcm0gOiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHZhbGlkYXRlQWxsKG1hcmtBczogXCJ0b3VjaGVkXCIgfCBcImRpcnR5XCIgPSBcInRvdWNoZWRcIikge1xuXG4gICAgICAgIGlmICghdGhpcy5mb3JtR3JvdXBEaXJlY3RpdmUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGNvbnRyb2xOYW1lIGluIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzKSB7XG4gICAgICAgICAgICBsZXQgY29udHJvbCA9IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2NvbnRyb2xOYW1lXTtcblxuICAgICAgICAgICAgaWYgKG1hcmtBcyA9PSBcInRvdWNoZWRcIikge1xuICAgICAgICAgICAgICAgIGNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobWFya0FzID09IFwiZGlydHlcIikge1xuICAgICAgICAgICAgICAgIGNvbnRyb2wubWFya0FzRGlydHkoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGNvbnRyb2wgb2YgdGhpcy5jb250ZW50Q29udHJvbHMudG9BcnJheSgpKSB7XG4gICAgICAgICAgICBpZiAoIWNvbnRyb2wudmFsaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzSW1wbChjb250cm9sKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZm9jdXNJbXBsKGNvbnRyb2w6IHN0cmluZyB8IGFueSwgc2Nyb2xsSW50b1ZpZXc6IGJvb2xlYW4gPSB0cnVlKSB7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb250cm9sID09IFwic3RyaW5nXCIgJiYgdGhpcy5mb3JtR3JvdXBEaXJlY3RpdmUpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGMgb2YgdGhpcy5mb3JtR3JvdXBEaXJlY3RpdmUuZGlyZWN0aXZlcykge1xuICAgICAgICAgICAgICAgIGlmIChjLm5hbWUgPT0gY29udHJvbCkge1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sID0gYztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGVsZW1lbnRUb1Njcm9sbDogSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKGNvbnRyb2wgaW5zdGFuY2VvZiBGb3JtQ29udHJvbE5hbWUpIHtcbiAgICAgICAgICAgIGxldCBlbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZm9ybWNvbnRyb2xuYW1lPVwiICsgY29udHJvbC5uYW1lICsgXCJdXCIpO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50VG9TY3JvbGwgPSBlbGVtZW50O1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIChcInNldEZvY3VzXCIgaW4gY29udHJvbCkge1xuICAgICAgICAvLyAgICAgY29udHJvbC5zZXRGb2N1cygpO1xuICAgICAgICAvLyAgICAgZWxlbWVudFRvU2Nyb2xsID0gY29udHJvbC5nZXROYXRpdmVFbGVtZW50KCkuY2xvc2VzdChcIi5pdGVtXCIpO1xuICAgICAgICAvLyB9IGVsc2UgaWYgKGNvbnRyb2wgJiYgdHlwZW9mIGNvbnRyb2wuZm9jdXMgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIC8vICAgICBjb250cm9sLmZvY3VzKCk7XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyBpZiAoIWVsZW1lbnRUb1Njcm9sbCAmJiBjb250cm9sICYmIGNvbnRyb2wubmF0aXZlRWxlbWVudCkge1xuICAgICAgICAvLyAgICAgZWxlbWVudFRvU2Nyb2xsID0gY29udHJvbC5uYXRpdmVFbGVtZW50LmNsb3Nlc3QoXCIuaXRlbVwiKSB8fCBjb250cm9sLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIC8vIH1cblxuICAgICAgICBpZiAoc2Nyb2xsSW50b1ZpZXcgJiYgZWxlbWVudFRvU2Nyb2xsKSB7XG4gICAgICAgICAgICBlbGVtZW50VG9TY3JvbGwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBmb2N1cyhmb3JtQ29udHJvbE5hbWU6IHN0cmluZywgc2Nyb2xsSW50b1ZpZXc6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHRoaXMuZm9jdXNJbXBsKGZvcm1Db250cm9sTmFtZSwgc2Nyb2xsSW50b1ZpZXcpO1xuICAgIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtGb3JtSGVscGVyXSxcbiAgICBib290c3RyYXA6IFtdLFxuICAgIGV4cG9ydHM6IFtGb3JtSGVscGVyXVxufSlcbmV4cG9ydCBjbGFzcyBGb3JtSGVscGVyTW9kdWxlIHtcbn1cbiJdfQ==