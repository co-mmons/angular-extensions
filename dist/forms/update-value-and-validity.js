import { FormArray, FormGroup } from "@angular/forms";
export function updateValueAndValidity(control, ommit) {
    if (!control) {
        return;
    }
    if (ommit) {
        for (var _i = 0, ommit_1 = ommit; _i < ommit_1.length; _i++) {
            var c = ommit_1[_i];
            if (c === control) {
                return;
            }
        }
    }
    if (control instanceof FormGroup) {
        var group = control;
        for (var field in group.controls) {
            updateValueAndValidity(group.controls[field], ommit);
        }
    }
    else if (control instanceof FormArray) {
        var group = control;
        for (var field in group.controls) {
            var c = group.controls[field];
            updateValueAndValidity(group.controls[field], ommit);
        }
    }
    control.updateValueAndValidity();
}
//# sourceMappingURL=update-value-and-validity.js.map