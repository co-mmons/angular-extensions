import {AbstractControl, FormArray, FormGroup} from "@angular/forms";

export function updateValueAndValidity(control: AbstractControl, ommit?: AbstractControl[]) {

    if (!control) {
        return;
    }

    if (ommit) {
        for (const c of ommit) {
            if (c === control) {
                return;
            }
        }
    }

    if (control instanceof FormGroup) {
        const group = (control as FormGroup);

        for (const field in group.controls) {
            updateValueAndValidity(group.controls[field], ommit);
        }

    } else if (control instanceof FormArray) {
        const group = (control as FormArray);

        for (const field in group.controls) {
            const c = group.controls[field];
            updateValueAndValidity(group.controls[field], ommit);
        }
    }

    control.updateValueAndValidity();
}
