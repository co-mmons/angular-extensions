import { AbstractControl, FormArray, FormGroup } from "@angular/forms";
export function updateValueAndValidity(controlOrControls, opts) {
    var controls;
    if (Array.isArray(controlOrControls)) {
        controls = controlOrControls;
    }
    else if (controlOrControls instanceof AbstractControl) {
        controls = [controlOrControls];
    }
    else if (controlOrControls) {
        controls = [];
        for (var _i = 0, _a = Object.keys(controlOrControls); _i < _a.length; _i++) {
            var k = _a[_i];
            if (controlOrControls[k]) {
                controls.push(controlOrControls[k]);
            }
        }
    }
    for (var _b = 0, controls_1 = controls; _b < controls_1.length; _b++) {
        var control = controls_1[_b];
        if (!control) {
            return;
        }
        if (opts && opts.ommit) {
            for (var _c = 0, _d = opts.ommit; _c < _d.length; _c++) {
                var c = _d[_c];
                if (c === control) {
                    return;
                }
            }
        }
        if (!opts.onlySelf) {
            if (control instanceof FormGroup) {
                var group = control;
                for (var field in group.controls) {
                    updateValueAndValidity(group.controls[field], opts);
                }
            }
            else if (control instanceof FormArray) {
                var group = control;
                for (var field in group.controls) {
                    var c = group.controls[field];
                    updateValueAndValidity(group.controls[field], opts);
                }
            }
        }
        control.updateValueAndValidity(opts);
    }
}
//# sourceMappingURL=update-value-and-validity.js.map