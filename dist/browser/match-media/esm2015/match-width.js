import { __decorate } from "tslib";
import { Pipe, PipeTransform, Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";
import { ScreenSizeMinWidth } from "./screen-size";
import { MatchMediaPipe } from "./match-media";
function buildMediaQuery(comparison, input) {
    let size = input;
    // when predefined size is given
    if (input.match(/^\D+$/)) {
        size = ScreenSizeMinWidth[input];
        if (size === undefined) {
            throw new Error("Cannot find predefined screen size for key " + input);
        }
        if (comparison == "lte") {
            size = size - 1;
        }
    }
    return `(${comparison == "gte" ? "min-width" : "max-width"}: ${size}px)`;
}
let MatchWidthGreaterPipe = class MatchWidthGreaterPipe extends MatchMediaPipe {
    prepareQuery(query) {
        return buildMediaQuery("gte", query);
    }
};
MatchWidthGreaterPipe = __decorate([
    Pipe({
        name: "matchGreaterWidth",
        pure: false
    })
], MatchWidthGreaterPipe);
export { MatchWidthGreaterPipe };
let MatchLesserWidthPipe = class MatchLesserWidthPipe extends MatchMediaPipe {
    prepareQuery(query) {
        return buildMediaQuery("lte", query);
    }
};
MatchLesserWidthPipe = __decorate([
    Pipe({
        name: "matchLesserWidth",
        pure: false
    })
], MatchLesserWidthPipe);
export { MatchLesserWidthPipe };
let IfMatchGreaterWidthDirective = class IfMatchGreaterWidthDirective {
    constructor(template, viewContainer) {
        this.template = template;
        this.viewContainer = viewContainer;
    }
    set ifMatchGreaterWidth(minWidth) {
        let matches = window.matchMedia(buildMediaQuery("gte", minWidth)).matches;
        if (matches) {
            this.viewContainer.createEmbeddedView(this.template);
        }
        else if (!matches) {
            this.viewContainer.clear();
        }
    }
};
IfMatchGreaterWidthDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef }
];
__decorate([
    Input()
], IfMatchGreaterWidthDirective.prototype, "ifMatchGreaterWidth", null);
IfMatchGreaterWidthDirective = __decorate([
    Directive({
        selector: "[ifMatchGreaterWidth]"
    })
], IfMatchGreaterWidthDirective);
export { IfMatchGreaterWidthDirective };
let IfMatchLesserWidthDirective = class IfMatchLesserWidthDirective {
    constructor(template, viewContainer) {
        this.template = template;
        this.viewContainer = viewContainer;
    }
    set ifMatchLesserWidth(maxWidth) {
        let matches = window.matchMedia(buildMediaQuery("lte", maxWidth)).matches;
        if (matches) {
            this.viewContainer.createEmbeddedView(this.template);
        }
        else if (!matches) {
            this.viewContainer.clear();
        }
    }
};
IfMatchLesserWidthDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef }
];
__decorate([
    Input()
], IfMatchLesserWidthDirective.prototype, "ifMatchLesserWidth", null);
IfMatchLesserWidthDirective = __decorate([
    Directive({
        selector: "[ifMatchLesserWidth]"
    })
], IfMatchLesserWidthDirective);
export { IfMatchLesserWidthDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2gtd2lkdGguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY28ubW1vbnMvYW5ndWxhci1leHRlbnNpb25zL2Jyb3dzZXIvbWF0Y2gtbWVkaWEvIiwic291cmNlcyI6WyJtYXRjaC13aWR0aC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDbkcsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFN0MsU0FBUyxlQUFlLENBQUMsVUFBeUIsRUFBRSxLQUFhO0lBRTdELElBQUksSUFBSSxHQUFRLEtBQUssQ0FBQztJQUV0QixnQ0FBZ0M7SUFDaEMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ3RCLElBQUksR0FBRyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVqQyxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDcEIsTUFBTSxJQUFJLEtBQUssQ0FBQyw2Q0FBNkMsR0FBRyxLQUFLLENBQUMsQ0FBQztTQUMxRTtRQUVELElBQUksVUFBVSxJQUFJLEtBQUssRUFBRTtZQUNyQixJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQztTQUNuQjtLQUNKO0lBRUQsT0FBTyxJQUFJLFVBQVUsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsV0FBVyxLQUFLLElBQUksS0FBSyxDQUFDO0FBQzdFLENBQUM7QUFNRCxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFzQixTQUFRLGNBQWM7SUFFM0MsWUFBWSxDQUFDLEtBQWE7UUFDaEMsT0FBTyxlQUFlLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Q0FFSixDQUFBO0FBTlkscUJBQXFCO0lBSmpDLElBQUksQ0FBQztRQUNGLElBQUksRUFBRSxtQkFBbUI7UUFDekIsSUFBSSxFQUFFLEtBQUs7S0FDZCxDQUFDO0dBQ1cscUJBQXFCLENBTWpDO1NBTlkscUJBQXFCO0FBWWxDLElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQXFCLFNBQVEsY0FBYztJQUUxQyxZQUFZLENBQUMsS0FBYTtRQUNoQyxPQUFPLGVBQWUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUVKLENBQUE7QUFOWSxvQkFBb0I7SUFKaEMsSUFBSSxDQUFDO1FBQ0YsSUFBSSxFQUFFLGtCQUFrQjtRQUN4QixJQUFJLEVBQUUsS0FBSztLQUNkLENBQUM7R0FDVyxvQkFBb0IsQ0FNaEM7U0FOWSxvQkFBb0I7QUFXakMsSUFBYSw0QkFBNEIsR0FBekMsTUFBYSw0QkFBNEI7SUFFckMsWUFBb0IsUUFBMEIsRUFBVSxhQUErQjtRQUFuRSxhQUFRLEdBQVIsUUFBUSxDQUFrQjtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtJQUN2RixDQUFDO0lBR0QsSUFBSSxtQkFBbUIsQ0FBQyxRQUFnQjtRQUVwQyxJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFFMUUsSUFBSSxPQUFPLEVBQUU7WUFDVCxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN4RDthQUFNLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUM5QjtJQUNMLENBQUM7Q0FDSixDQUFBOztZQWRpQyxXQUFXO1lBQThCLGdCQUFnQjs7QUFJdkY7SUFEQyxLQUFLLEVBQUU7dUVBVVA7QUFmUSw0QkFBNEI7SUFIeEMsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLHVCQUF1QjtLQUNwQyxDQUFDO0dBQ1csNEJBQTRCLENBZ0J4QztTQWhCWSw0QkFBNEI7QUFxQnpDLElBQWEsMkJBQTJCLEdBQXhDLE1BQWEsMkJBQTJCO0lBRXBDLFlBQW9CLFFBQTBCLEVBQVUsYUFBK0I7UUFBbkUsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7SUFDdkYsQ0FBQztJQUdELElBQUksa0JBQWtCLENBQUMsUUFBZ0I7UUFFbkMsSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBRTFFLElBQUksT0FBTyxFQUFFO1lBQ1QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDeEQ7YUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDOUI7SUFDTCxDQUFDO0NBQ0osQ0FBQTs7WUFkaUMsV0FBVztZQUE4QixnQkFBZ0I7O0FBSXZGO0lBREMsS0FBSyxFQUFFO3FFQVVQO0FBZlEsMkJBQTJCO0lBSHZDLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxzQkFBc0I7S0FDbkMsQ0FBQztHQUNXLDJCQUEyQixDQWdCdkM7U0FoQlksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtLCBEaXJlY3RpdmUsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmLCBJbnB1dH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7U2NyZWVuU2l6ZU1pbldpZHRofSBmcm9tIFwiLi9zY3JlZW4tc2l6ZVwiO1xuaW1wb3J0IHtNYXRjaE1lZGlhUGlwZX0gZnJvbSBcIi4vbWF0Y2gtbWVkaWFcIjtcblxuZnVuY3Rpb24gYnVpbGRNZWRpYVF1ZXJ5KGNvbXBhcmlzb246IFwibHRlXCIgfCBcImd0ZVwiLCBpbnB1dDogc3RyaW5nKTogc3RyaW5nIHtcblxuICAgIGxldCBzaXplOiBhbnkgPSBpbnB1dDtcblxuICAgIC8vIHdoZW4gcHJlZGVmaW5lZCBzaXplIGlzIGdpdmVuXG4gICAgaWYgKGlucHV0Lm1hdGNoKC9eXFxEKyQvKSkge1xuICAgICAgICBzaXplID0gU2NyZWVuU2l6ZU1pbldpZHRoW2lucHV0XTtcblxuICAgICAgICBpZiAoc2l6ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBwcmVkZWZpbmVkIHNjcmVlbiBzaXplIGZvciBrZXkgXCIgKyBpbnB1dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29tcGFyaXNvbiA9PSBcImx0ZVwiKSB7XG4gICAgICAgICAgICBzaXplID0gc2l6ZSAtIDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYCgke2NvbXBhcmlzb24gPT0gXCJndGVcIiA/IFwibWluLXdpZHRoXCIgOiBcIm1heC13aWR0aFwifTogJHtzaXplfXB4KWA7XG59XG5cbkBQaXBlKHtcbiAgICBuYW1lOiBcIm1hdGNoR3JlYXRlcldpZHRoXCIsXG4gICAgcHVyZTogZmFsc2Vcbn0pXG5leHBvcnQgY2xhc3MgTWF0Y2hXaWR0aEdyZWF0ZXJQaXBlIGV4dGVuZHMgTWF0Y2hNZWRpYVBpcGUge1xuXG4gICAgcHJvdGVjdGVkIHByZXBhcmVRdWVyeShxdWVyeTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBidWlsZE1lZGlhUXVlcnkoXCJndGVcIiwgcXVlcnkpO1xuICAgIH1cblxufVxuXG5AUGlwZSh7XG4gICAgbmFtZTogXCJtYXRjaExlc3NlcldpZHRoXCIsXG4gICAgcHVyZTogZmFsc2Vcbn0pXG5leHBvcnQgY2xhc3MgTWF0Y2hMZXNzZXJXaWR0aFBpcGUgZXh0ZW5kcyBNYXRjaE1lZGlhUGlwZSB7XG5cbiAgICBwcm90ZWN0ZWQgcHJlcGFyZVF1ZXJ5KHF1ZXJ5OiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIGJ1aWxkTWVkaWFRdWVyeShcImx0ZVwiLCBxdWVyeSk7XG4gICAgfVxuXG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcIltpZk1hdGNoR3JlYXRlcldpZHRoXVwiXG59KVxuZXhwb3J0IGNsYXNzIElmTWF0Y2hHcmVhdGVyV2lkdGhEaXJlY3RpdmUge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiwgcHJpdmF0ZSB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmKSB7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBzZXQgaWZNYXRjaEdyZWF0ZXJXaWR0aChtaW5XaWR0aDogc3RyaW5nKSB7XG5cbiAgICAgICAgbGV0IG1hdGNoZXMgPSB3aW5kb3cubWF0Y2hNZWRpYShidWlsZE1lZGlhUXVlcnkoXCJndGVcIiwgbWluV2lkdGgpKS5tYXRjaGVzO1xuXG4gICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMudGVtcGxhdGUpO1xuICAgICAgICB9IGVsc2UgaWYgKCFtYXRjaGVzKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXdDb250YWluZXIuY2xlYXIoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwiW2lmTWF0Y2hMZXNzZXJXaWR0aF1cIlxufSlcbmV4cG9ydCBjbGFzcyBJZk1hdGNoTGVzc2VyV2lkdGhEaXJlY3RpdmUge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiwgcHJpdmF0ZSB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmKSB7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBzZXQgaWZNYXRjaExlc3NlcldpZHRoKG1heFdpZHRoOiBzdHJpbmcpIHtcblxuICAgICAgICBsZXQgbWF0Y2hlcyA9IHdpbmRvdy5tYXRjaE1lZGlhKGJ1aWxkTWVkaWFRdWVyeShcImx0ZVwiLCBtYXhXaWR0aCkpLm1hdGNoZXM7XG5cbiAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAgIHRoaXMudmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoIW1hdGNoZXMpIHtcbiAgICAgICAgICAgIHRoaXMudmlld0NvbnRhaW5lci5jbGVhcigpO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==