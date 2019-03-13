import { AbstractControl } from "@angular/forms";
export interface FormGroupNamedControls<T extends string> {
    controls: {
        [K in T]?: AbstractControl;
    };
}
