import { __decorate, __param, __values } from "tslib";
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
            for (var _b = __values(this.contentControls.toArray()), _c = _b.next(); !_c.done; _c = _b.next()) {
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
            for (var _b = __values(this.contentControls.toArray()), _c = _b.next(); !_c.done; _c = _b.next()) {
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
                for (var _b = __values(this.formGroupDirective.directives), _c = _b.next(); !_c.done; _c = _b.next()) {
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
    return FormHelper;
}());
export { FormHelper };
var FormHelperModule = /** @class */ (function () {
    function FormHelperModule() {
    }
    FormHelperModule = __decorate([
        NgModule({
            declarations: [FormHelper],
            bootstrap: [],
            exports: [FormHelper]
        })
    ], FormHelperModule);
    return FormHelperModule;
}());
export { FormHelperModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1oZWxwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY28ubW1vbnMvYW5ndWxhci1leHRlbnNpb25zL2Jyb3dzZXIvZm9ybS1oZWxwZXIvIiwic291cmNlcyI6WyJmb3JtLWhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMzRyxPQUFPLEVBQUMsU0FBUyxFQUFFLGVBQWUsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLEVBQUUsNEJBQTRCLEVBQUUsZUFBZSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFNckk7SUFFSSxvQkFBNEIsT0FBZ0MsRUFBOEIsTUFBYyxFQUErQixrQkFBc0M7UUFBakosWUFBTyxHQUFQLE9BQU8sQ0FBeUI7UUFBOEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUErQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO0lBQzdLLENBQUM7SUFHRCxzQkFBVyxnQ0FBUTthQUFuQjtZQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9ELENBQUM7YUFFRCxVQUFvQixRQUFpQjtZQUNqQyxJQUFJLFFBQVEsRUFBRTtnQkFDVixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQzNEO2lCQUFNO2dCQUNILElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUMxRDtRQUNMLENBQUM7OztPQVJBO0lBVU0sbUNBQWMsR0FBckI7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUN6QixDQUFDO0lBR0Qsc0JBQVcsNEJBQUk7YUFBZjtZQUNJLE9BQU8s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Q0FBQztPQUNXLGdCQUFnQixDQUM1QjtJQUFELHVCQUFDO0NBQUEsQUFERCxJQUNDO1NBRFksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSwgRGlyZWN0aXZlLCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgRWxlbWVudFJlZiwgSW5wdXQsIE9wdGlvbmFsfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtGb3JtR3JvdXAsIEZvcm1Db250cm9sTmFtZSwgRm9ybUdyb3VwRGlyZWN0aXZlLCBOZ0Zvcm0sIENoZWNrYm94Q29udHJvbFZhbHVlQWNjZXNzb3IsIEFic3RyYWN0Q29udHJvbH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcIltuZ3gtZm9ybS1oZWxwZXJdLFtuZ3hGb3JtSGVscGVyXVwiLFxuICAgIGV4cG9ydEFzOiBcIm5neEZvcm1IZWxwZXJcIlxufSlcbmV4cG9ydCBjbGFzcyBGb3JtSGVscGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBlbGVtZW50OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PiwgQE9wdGlvbmFsKCkgcHVibGljIHJlYWRvbmx5IG5nRm9ybTogTmdGb3JtLCBAT3B0aW9uYWwoKSBwcml2YXRlIHJlYWRvbmx5IGZvcm1Hcm91cERpcmVjdGl2ZTogRm9ybUdyb3VwRGlyZWN0aXZlKSB7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IHJlYWRvbmx5KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuaGFzQXR0cmlidXRlKFwicmVhZG9ubHlcIik7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCByZWFkb25seShyZWFkb25seTogYm9vbGVhbikge1xuICAgICAgICBpZiAocmVhZG9ubHkpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZShcInJlYWRvbmx5XCIsIFwiXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwicmVhZG9ubHlcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgbWFya0FzUmVhZG9ubHkoKSB7XG4gICAgICAgIHRoaXMucmVhZG9ubHkgPSB0cnVlO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBidXN5KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuaGFzQXR0cmlidXRlKFwiYnVzeVwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGJ1c3koYnVzeTogYm9vbGVhbikge1xuICAgICAgICBpZiAoYnVzeSkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwiYnVzeVwiLCBcIlwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImJ1c3lcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgbWFya0FzQnVzeSgpIHtcbiAgICAgICAgdGhpcy5idXN5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBAQ29udGVudENoaWxkcmVuKEZvcm1Db250cm9sTmFtZSwge2Rlc2NlbmRhbnRzOiB0cnVlfSlcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgY29udGVudENvbnRyb2xzOiBRdWVyeUxpc3Q8Rm9ybUNvbnRyb2xOYW1lPjtcblxuICAgIHB1YmxpYyBmb3JtQ29udHJvbE5hbWUobmFtZTogc3RyaW5nKTogRm9ybUNvbnRyb2xOYW1lIHtcblxuICAgICAgICBmb3IgKGxldCBhIG9mIHRoaXMuY29udGVudENvbnRyb2xzLnRvQXJyYXkoKSkge1xuICAgICAgICAgICAgaWYgKGEubmFtZSA9PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGZvcm1Hcm91cCgpOiBGb3JtR3JvdXAge1xuICAgICAgICByZXR1cm4gdGhpcy5mb3JtR3JvdXBEaXJlY3RpdmUgPyB0aGlzLmZvcm1Hcm91cERpcmVjdGl2ZS5mb3JtIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHB1YmxpYyB2YWxpZGF0ZUFsbChtYXJrQXM6IFwidG91Y2hlZFwiIHwgXCJkaXJ0eVwiID0gXCJ0b3VjaGVkXCIpIHtcblxuICAgICAgICBpZiAoIXRoaXMuZm9ybUdyb3VwRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBjb250cm9sTmFtZSBpbiB0aGlzLmZvcm1Hcm91cC5jb250cm9scykge1xuICAgICAgICAgICAgbGV0IGNvbnRyb2wgPSB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tjb250cm9sTmFtZV07XG5cbiAgICAgICAgICAgIGlmIChtYXJrQXMgPT0gXCJ0b3VjaGVkXCIpIHtcbiAgICAgICAgICAgICAgICBjb250cm9sLm1hcmtBc1RvdWNoZWQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1hcmtBcyA9PSBcImRpcnR5XCIpIHtcbiAgICAgICAgICAgICAgICBjb250cm9sLm1hcmtBc0RpcnR5KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBjb250cm9sIG9mIHRoaXMuY29udGVudENvbnRyb2xzLnRvQXJyYXkoKSkge1xuICAgICAgICAgICAgaWYgKCFjb250cm9sLnZhbGlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c0ltcGwoY29udHJvbCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGZvY3VzSW1wbChjb250cm9sOiBzdHJpbmcgfCBhbnksIHNjcm9sbEludG9WaWV3OiBib29sZWFuID0gdHJ1ZSkge1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udHJvbCA9PSBcInN0cmluZ1wiICYmIHRoaXMuZm9ybUdyb3VwRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBjIG9mIHRoaXMuZm9ybUdyb3VwRGlyZWN0aXZlLmRpcmVjdGl2ZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoYy5uYW1lID09IGNvbnRyb2wpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbCA9IGM7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBlbGVtZW50VG9TY3JvbGw6IEhUTUxFbGVtZW50O1xuXG4gICAgICAgIGlmIChjb250cm9sIGluc3RhbmNlb2YgRm9ybUNvbnRyb2xOYW1lKSB7XG4gICAgICAgICAgICBsZXQgZWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiW2Zvcm1jb250cm9sbmFtZT1cIiArIGNvbnRyb2wubmFtZSArIFwiXVwiKTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudFRvU2Nyb2xsID0gZWxlbWVudDtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiAoXCJzZXRGb2N1c1wiIGluIGNvbnRyb2wpIHtcbiAgICAgICAgLy8gICAgIGNvbnRyb2wuc2V0Rm9jdXMoKTtcbiAgICAgICAgLy8gICAgIGVsZW1lbnRUb1Njcm9sbCA9IGNvbnRyb2wuZ2V0TmF0aXZlRWxlbWVudCgpLmNsb3Nlc3QoXCIuaXRlbVwiKTtcbiAgICAgICAgLy8gfSBlbHNlIGlmIChjb250cm9sICYmIHR5cGVvZiBjb250cm9sLmZvY3VzID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAvLyAgICAgY29udHJvbC5mb2N1cygpO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gaWYgKCFlbGVtZW50VG9TY3JvbGwgJiYgY29udHJvbCAmJiBjb250cm9sLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgLy8gICAgIGVsZW1lbnRUb1Njcm9sbCA9IGNvbnRyb2wubmF0aXZlRWxlbWVudC5jbG9zZXN0KFwiLml0ZW1cIikgfHwgY29udHJvbC5uYXRpdmVFbGVtZW50O1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgaWYgKHNjcm9sbEludG9WaWV3ICYmIGVsZW1lbnRUb1Njcm9sbCkge1xuICAgICAgICAgICAgZWxlbWVudFRvU2Nyb2xsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZm9jdXMoZm9ybUNvbnRyb2xOYW1lOiBzdHJpbmcsIHNjcm9sbEludG9WaWV3OiBib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmZvY3VzSW1wbChmb3JtQ29udHJvbE5hbWUsIHNjcm9sbEludG9WaWV3KTtcbiAgICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbRm9ybUhlbHBlcl0sXG4gICAgYm9vdHN0cmFwOiBbXSxcbiAgICBleHBvcnRzOiBbRm9ybUhlbHBlcl1cbn0pXG5leHBvcnQgY2xhc3MgRm9ybUhlbHBlck1vZHVsZSB7XG59XG4iXX0=