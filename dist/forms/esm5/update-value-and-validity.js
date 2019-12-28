import { __values } from "tslib";
import { AbstractControl, FormArray, FormGroup } from "@angular/forms";
export function updateValueAndValidity(controlOrControls, opts) {
    var e_1, _a, e_2, _b, e_3, _c;
    var controls;
    if (Array.isArray(controlOrControls)) {
        controls = controlOrControls;
    }
    else if (controlOrControls instanceof AbstractControl) {
        controls = [controlOrControls];
    }
    else if (controlOrControls) {
        controls = [];
        try {
            for (var _d = __values(Object.keys(controlOrControls)), _e = _d.next(); !_e.done; _e = _d.next()) {
                var k = _e.value;
                if (controlOrControls[k]) {
                    controls.push(controlOrControls[k]);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    try {
        CONTROLS: for (var controls_1 = __values(controls), controls_1_1 = controls_1.next(); !controls_1_1.done; controls_1_1 = controls_1.next()) {
            var control = controls_1_1.value;
            if (!control) {
                continue;
            }
            if (opts && opts.ommit) {
                try {
                    for (var _f = (e_3 = void 0, __values(opts.ommit)), _g = _f.next(); !_g.done; _g = _f.next()) {
                        var c = _g.value;
                        if (c === control) {
                            continue CONTROLS;
                        }
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (_g && !_g.done && (_c = _f.return)) _c.call(_f);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            }
            if (!opts || !opts.onlySelf) {
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
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (controls_1_1 && !controls_1_1.done && (_b = controls_1.return)) _b.call(controls_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXZhbHVlLWFuZC12YWxpZGl0eS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjby5tbW9ucy9hbmd1bGFyLWV4dGVuc2lvbnMvZm9ybXMvIiwic291cmNlcyI6WyJ1cGRhdGUtdmFsdWUtYW5kLXZhbGlkaXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsZUFBZSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRSxNQUFNLFVBQVUsc0JBQXNCLENBQUMsaUJBQTZGLEVBQUUsSUFBMkU7O0lBRTdNLElBQUksUUFBMkIsQ0FBQztJQUVoQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsRUFBRTtRQUNsQyxRQUFRLEdBQUcsaUJBQWlCLENBQUM7S0FDaEM7U0FBTSxJQUFJLGlCQUFpQixZQUFZLGVBQWUsRUFBRTtRQUNyRCxRQUFRLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0tBQ2xDO1NBQU0sSUFBSSxpQkFBaUIsRUFBRTtRQUMxQixRQUFRLEdBQUcsRUFBRSxDQUFDOztZQUNkLEtBQWdCLElBQUEsS0FBQSxTQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQSxnQkFBQSw0QkFBRTtnQkFBM0MsSUFBTSxDQUFDLFdBQUE7Z0JBQ1IsSUFBSSxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDdEIsUUFBUSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUN2QzthQUNKOzs7Ozs7Ozs7S0FDSjs7UUFFRCxRQUFRLEVBQUUsS0FBc0IsSUFBQSxhQUFBLFNBQUEsUUFBUSxDQUFBLGtDQUFBLHdEQUFFO1lBQTNCLElBQU0sT0FBTyxxQkFBQTtZQUV4QixJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNWLFNBQVM7YUFDWjtZQUVELElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7O29CQUNwQixLQUFnQixJQUFBLG9CQUFBLFNBQUEsSUFBSSxDQUFDLEtBQUssQ0FBQSxDQUFBLGdCQUFBLDRCQUFFO3dCQUF2QixJQUFNLENBQUMsV0FBQTt3QkFDUixJQUFJLENBQUMsS0FBSyxPQUFPLEVBQUU7NEJBQ2YsU0FBUyxRQUFRLENBQUM7eUJBQ3JCO3FCQUNKOzs7Ozs7Ozs7YUFDSjtZQUVELElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUN6QixJQUFJLE9BQU8sWUFBWSxTQUFTLEVBQUU7b0JBQzlCLElBQU0sS0FBSyxHQUFJLE9BQXFCLENBQUM7b0JBRXJDLEtBQUssSUFBTSxLQUFLLElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRTt3QkFDaEMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztxQkFDdkQ7aUJBRUo7cUJBQU0sSUFBSSxPQUFPLFlBQVksU0FBUyxFQUFFO29CQUNyQyxJQUFNLEtBQUssR0FBSSxPQUFxQixDQUFDO29CQUVyQyxLQUFLLElBQU0sS0FBSyxJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUU7d0JBQ2hDLElBQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ2hDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7cUJBQ3ZEO2lCQUNKO2FBQ0o7WUFFRCxPQUFPLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDeEM7Ozs7Ozs7OztBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Fic3RyYWN0Q29udHJvbCwgRm9ybUFycmF5LCBGb3JtR3JvdXB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVmFsdWVBbmRWYWxpZGl0eShjb250cm9sT3JDb250cm9sczogQWJzdHJhY3RDb250cm9sIHwgQWJzdHJhY3RDb250cm9sW10gfCB7W2NvbnRyb2w6IHN0cmluZ106IEFic3RyYWN0Q29udHJvbH0sIG9wdHM/OiB7b25seVNlbGY/OiBib29sZWFuOyBlbWl0RXZlbnQ/OiBib29sZWFuOyBvbW1pdD86IEFic3RyYWN0Q29udHJvbFtdfSkge1xuXG4gICAgbGV0IGNvbnRyb2xzOiBBYnN0cmFjdENvbnRyb2xbXTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KGNvbnRyb2xPckNvbnRyb2xzKSkge1xuICAgICAgICBjb250cm9scyA9IGNvbnRyb2xPckNvbnRyb2xzO1xuICAgIH0gZWxzZSBpZiAoY29udHJvbE9yQ29udHJvbHMgaW5zdGFuY2VvZiBBYnN0cmFjdENvbnRyb2wpIHtcbiAgICAgICAgY29udHJvbHMgPSBbY29udHJvbE9yQ29udHJvbHNdO1xuICAgIH0gZWxzZSBpZiAoY29udHJvbE9yQ29udHJvbHMpIHtcbiAgICAgICAgY29udHJvbHMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBrIG9mIE9iamVjdC5rZXlzKGNvbnRyb2xPckNvbnRyb2xzKSkge1xuICAgICAgICAgICAgaWYgKGNvbnRyb2xPckNvbnRyb2xzW2tdKSB7XG4gICAgICAgICAgICAgICAgY29udHJvbHMucHVzaChjb250cm9sT3JDb250cm9sc1trXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBDT05UUk9MUzogZm9yIChjb25zdCBjb250cm9sIG9mIGNvbnRyb2xzKSB7XG5cbiAgICAgICAgaWYgKCFjb250cm9sKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRzICYmIG9wdHMub21taXQpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgYyBvZiBvcHRzLm9tbWl0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGMgPT09IGNvbnRyb2wpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWUgQ09OVFJPTFM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFvcHRzIHx8ICFvcHRzLm9ubHlTZWxmKSB7XG4gICAgICAgICAgICBpZiAoY29udHJvbCBpbnN0YW5jZW9mIEZvcm1Hcm91cCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwID0gKGNvbnRyb2wgYXMgRm9ybUdyb3VwKTtcblxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZmllbGQgaW4gZ3JvdXAuY29udHJvbHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlVmFsdWVBbmRWYWxpZGl0eShncm91cC5jb250cm9sc1tmaWVsZF0sIG9wdHMpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIGlmIChjb250cm9sIGluc3RhbmNlb2YgRm9ybUFycmF5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZ3JvdXAgPSAoY29udHJvbCBhcyBGb3JtQXJyYXkpO1xuXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBmaWVsZCBpbiBncm91cC5jb250cm9scykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjID0gZ3JvdXAuY29udHJvbHNbZmllbGRdO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KGdyb3VwLmNvbnRyb2xzW2ZpZWxkXSwgb3B0cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9wdHMpO1xuICAgIH1cbn1cbiJdfQ==