import { Directive, forwardRef, NgModule } from "@angular/core";
import { NG_VALIDATORS } from "@angular/forms";
import { MessageRef } from "@co.mmons/js-intl";
const urlValidatorRegex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/i;
export const urlValidatorProvider = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => UrlValidator),
    multi: true
};
export class UrlValidator {
    static validate(control) {
        const value = control.value;
        if (urlValidatorRegex.test(value)) {
            return undefined;
        }
        return {
            invalidUrl: new MessageRef("@co.mmons/angular-extensions/forms", "invalidUrlError")
        };
    }
    validate(c) {
        return UrlValidator.validate(c);
    }
}
UrlValidator.decorators = [
    { type: Directive, args: [{
                selector: '[url][formControlName],[url][formControl],[url][ngModel]',
                providers: [urlValidatorProvider]
            },] }
];
export class UrlValidatorModule {
}
UrlValidatorModule.decorators = [
    { type: NgModule, args: [{
                declarations: [UrlValidator],
                exports: [UrlValidator]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLXZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mb3Jtcy91cmwtdmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQWtCLGFBQWEsRUFBOEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRixPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFFN0MsTUFBTSxpQkFBaUIsR0FBRyx1TEFBdUwsQ0FBQztBQUVsTixNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FBUTtJQUNyQyxPQUFPLEVBQUUsYUFBYTtJQUN0QixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQztJQUMzQyxLQUFLLEVBQUUsSUFBSTtDQUNkLENBQUM7QUFNRixNQUFNLE9BQU8sWUFBWTtJQUVyQixNQUFNLENBQUMsUUFBUSxDQUFDLE9BQXdCO1FBRXBDLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFFNUIsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDL0IsT0FBTyxTQUFTLENBQUM7U0FDcEI7UUFFRCxPQUFPO1lBQ0gsVUFBVSxFQUFFLElBQUksVUFBVSxDQUFDLG9DQUFvQyxFQUFFLGlCQUFpQixDQUFDO1NBQ3RGLENBQUM7SUFDTixDQUFDO0lBRUQsUUFBUSxDQUFDLENBQWtCO1FBQ3ZCLE9BQU8sWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7WUFyQkosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSwwREFBMEQ7Z0JBQ3BFLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO2FBQ3BDOztBQTBCRCxNQUFNLE9BQU8sa0JBQWtCOzs7WUFKOUIsUUFBUSxTQUFDO2dCQUNOLFlBQVksRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDNUIsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2FBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIGZvcndhcmRSZWYsIE5nTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtBYnN0cmFjdENvbnRyb2wsIE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRpb25FcnJvcnMsIFZhbGlkYXRvcn0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQge01lc3NhZ2VSZWZ9IGZyb20gXCJAY28ubW1vbnMvanMtaW50bFwiO1xuXG5jb25zdCB1cmxWYWxpZGF0b3JSZWdleCA9IC8oKChbQS1aYS16XXszLDl9Oig/OlxcL1xcLyk/KSg/OltcXC07OiY9XFwrXFwkLFxcd10rQCk/W0EtWmEtejAtOVxcLlxcLV0rfCg/Ond3d1xcLnxbXFwtOzomPVxcK1xcJCxcXHddK0ApW0EtWmEtejAtOVxcLlxcLV0rKSgoPzpcXC9bXFwrfiVcXC9cXC5cXHdcXC1fXSopP1xcPz8oPzpbXFwtXFwrPSY7JUBcXC5cXHdfXSopIz8oPzpbXFwuXFwhXFwvXFxcXFxcd10qKSk/KS9pO1xuXG5leHBvcnQgY29uc3QgdXJsVmFsaWRhdG9yUHJvdmlkZXI6IGFueSA9IHtcbiAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFVybFZhbGlkYXRvciksXG4gICAgbXVsdGk6IHRydWVcbn07XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW3VybF1bZm9ybUNvbnRyb2xOYW1lXSxbdXJsXVtmb3JtQ29udHJvbF0sW3VybF1bbmdNb2RlbF0nLFxuICAgIHByb3ZpZGVyczogW3VybFZhbGlkYXRvclByb3ZpZGVyXVxufSlcbmV4cG9ydCBjbGFzcyBVcmxWYWxpZGF0b3IgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xuXG4gICAgc3RhdGljIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMge1xuXG4gICAgICAgIGNvbnN0IHZhbHVlID0gY29udHJvbC52YWx1ZTtcblxuICAgICAgICBpZiAodXJsVmFsaWRhdG9yUmVnZXgudGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW52YWxpZFVybDogbmV3IE1lc3NhZ2VSZWYoXCJAY28ubW1vbnMvYW5ndWxhci1leHRlbnNpb25zL2Zvcm1zXCIsIFwiaW52YWxpZFVybEVycm9yXCIpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgICAgICByZXR1cm4gVXJsVmFsaWRhdG9yLnZhbGlkYXRlKGMpO1xuICAgIH1cblxufVxuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1VybFZhbGlkYXRvcl0sXG4gICAgZXhwb3J0czogW1VybFZhbGlkYXRvcl1cbn0pXG5leHBvcnQgY2xhc3MgVXJsVmFsaWRhdG9yTW9kdWxlIHtcbn1cbiJdfQ==