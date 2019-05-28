import { FormArray, FormGroup } from "@angular/forms";
export function updateValueAndValidity(control) {
    if (!control) {
        return;
    }
    if (control instanceof FormGroup) {
        var group = control;
        for (var field in group.controls) {
            updateValueAndValidity(group.controls[field]);
        }
    }
    else if (control instanceof FormArray) {
        var group = control;
        for (var field in group.controls) {
            var c = group.controls[field];
            updateValueAndValidity(group.controls[field]);
        }
    }
    control.updateValueAndValidity();
}
//# sourceMappingURL=update-value-and-validity.js.map