import {AbstractControl, FormArray, FormGroup} from "@angular/forms";

export function updateValueAndValidity(controlOrControls: AbstractControl | AbstractControl[] | {[control: string]: AbstractControl}, opts?: {onlySelf?: boolean; emitEvent?: boolean; ommit?: AbstractControl[]}) {

    let controls: AbstractControl[];

    if (Array.isArray(controlOrControls)) {
        controls = controlOrControls;
    } else if (controlOrControls instanceof AbstractControl) {
        controls = [controlOrControls];
    } else if (controlOrControls) {
        controls = [];
        for (const k of Object.keys(controlOrControls)) {
            if (controlOrControls[k]) {
                controls.push(controlOrControls[k]);
            }
        }
    }

    CONTROLS: for (const control of controls) {

        if (!control) {
            continue;
        }

        if (opts && opts.ommit) {
            for (const c of opts.ommit) {
                if (c === control) {
                    continue CONTROLS;
                }
            }
        }

        if (!opts.onlySelf) {
            if (control instanceof FormGroup) {
                const group = (control as FormGroup);

                for (const field in group.controls) {
                    updateValueAndValidity(group.controls[field], opts);
                }

            } else if (control instanceof FormArray) {
                const group = (control as FormArray);

                for (const field in group.controls) {
                    const c = group.controls[field];
                    updateValueAndValidity(group.controls[field], opts);
                }
            }
        }

        control.updateValueAndValidity(opts);
    }
}
