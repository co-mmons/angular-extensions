import { Pipe, Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";
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
export class MatchWidthGreaterPipe extends MatchMediaPipe {
    prepareQuery(query) {
        return buildMediaQuery("gte", query);
    }
}
MatchWidthGreaterPipe.decorators = [
    { type: Pipe, args: [{
                name: "matchGreaterWidth",
                pure: false
            },] }
];
export class MatchLesserWidthPipe extends MatchMediaPipe {
    prepareQuery(query) {
        return buildMediaQuery("lte", query);
    }
}
MatchLesserWidthPipe.decorators = [
    { type: Pipe, args: [{
                name: "matchLesserWidth",
                pure: false
            },] }
];
export class IfMatchGreaterWidthDirective {
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
}
IfMatchGreaterWidthDirective.decorators = [
    { type: Directive, args: [{
                selector: "[ifMatchGreaterWidth]"
            },] }
];
IfMatchGreaterWidthDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef }
];
IfMatchGreaterWidthDirective.propDecorators = {
    ifMatchGreaterWidth: [{ type: Input }]
};
export class IfMatchLesserWidthDirective {
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
}
IfMatchLesserWidthDirective.decorators = [
    { type: Directive, args: [{
                selector: "[ifMatchLesserWidth]"
            },] }
];
IfMatchLesserWidthDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef }
];
IfMatchLesserWidthDirective.propDecorators = {
    ifMatchLesserWidth: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2gtd2lkdGguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYnJvd3Nlci9tYXRjaC1tZWRpYS9tYXRjaC13aWR0aC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsSUFBSSxFQUFpQixTQUFTLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNuRyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUU3QyxTQUFTLGVBQWUsQ0FBQyxVQUF5QixFQUFFLEtBQWE7SUFFN0QsSUFBSSxJQUFJLEdBQVEsS0FBSyxDQUFDO0lBRXRCLGdDQUFnQztJQUNoQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDdEIsSUFBSSxHQUFHLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWpDLElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUNwQixNQUFNLElBQUksS0FBSyxDQUFDLDZDQUE2QyxHQUFHLEtBQUssQ0FBQyxDQUFDO1NBQzFFO1FBRUQsSUFBSSxVQUFVLElBQUksS0FBSyxFQUFFO1lBQ3JCLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1NBQ25CO0tBQ0o7SUFFRCxPQUFPLElBQUksVUFBVSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxXQUFXLEtBQUssSUFBSSxLQUFLLENBQUM7QUFDN0UsQ0FBQztBQU1ELE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxjQUFjO0lBRTNDLFlBQVksQ0FBQyxLQUFhO1FBQ2hDLE9BQU8sZUFBZSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7WUFSSixJQUFJLFNBQUM7Z0JBQ0YsSUFBSSxFQUFFLG1CQUFtQjtnQkFDekIsSUFBSSxFQUFFLEtBQUs7YUFDZDs7QUFhRCxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsY0FBYztJQUUxQyxZQUFZLENBQUMsS0FBYTtRQUNoQyxPQUFPLGVBQWUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDekMsQ0FBQzs7O1lBUkosSUFBSSxTQUFDO2dCQUNGLElBQUksRUFBRSxrQkFBa0I7Z0JBQ3hCLElBQUksRUFBRSxLQUFLO2FBQ2Q7O0FBWUQsTUFBTSxPQUFPLDRCQUE0QjtJQUVyQyxZQUFvQixRQUEwQixFQUFVLGFBQStCO1FBQW5FLGFBQVEsR0FBUixRQUFRLENBQWtCO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWtCO0lBQ3ZGLENBQUM7SUFFRCxJQUNJLG1CQUFtQixDQUFDLFFBQWdCO1FBRXBDLElBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUUxRSxJQUFJLE9BQU8sRUFBRTtZQUNULElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3hEO2FBQU0sSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzlCO0lBQ0wsQ0FBQzs7O1lBbEJKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsdUJBQXVCO2FBQ3BDOzs7WUFsRHVDLFdBQVc7WUFBRSxnQkFBZ0I7OztrQ0F3RGhFLEtBQUs7O0FBZ0JWLE1BQU0sT0FBTywyQkFBMkI7SUFFcEMsWUFBb0IsUUFBMEIsRUFBVSxhQUErQjtRQUFuRSxhQUFRLEdBQVIsUUFBUSxDQUFrQjtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtJQUN2RixDQUFDO0lBRUQsSUFDSSxrQkFBa0IsQ0FBQyxRQUFnQjtRQUVuQyxJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFFMUUsSUFBSSxPQUFPLEVBQUU7WUFDVCxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN4RDthQUFNLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUM5QjtJQUNMLENBQUM7OztZQWxCSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLHNCQUFzQjthQUNuQzs7O1lBdkV1QyxXQUFXO1lBQUUsZ0JBQWdCOzs7aUNBNkVoRSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtLCBEaXJlY3RpdmUsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmLCBJbnB1dH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7U2NyZWVuU2l6ZU1pbldpZHRofSBmcm9tIFwiLi9zY3JlZW4tc2l6ZVwiO1xuaW1wb3J0IHtNYXRjaE1lZGlhUGlwZX0gZnJvbSBcIi4vbWF0Y2gtbWVkaWFcIjtcblxuZnVuY3Rpb24gYnVpbGRNZWRpYVF1ZXJ5KGNvbXBhcmlzb246IFwibHRlXCIgfCBcImd0ZVwiLCBpbnB1dDogc3RyaW5nKTogc3RyaW5nIHtcblxuICAgIGxldCBzaXplOiBhbnkgPSBpbnB1dDtcblxuICAgIC8vIHdoZW4gcHJlZGVmaW5lZCBzaXplIGlzIGdpdmVuXG4gICAgaWYgKGlucHV0Lm1hdGNoKC9eXFxEKyQvKSkge1xuICAgICAgICBzaXplID0gU2NyZWVuU2l6ZU1pbldpZHRoW2lucHV0XTtcblxuICAgICAgICBpZiAoc2l6ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBwcmVkZWZpbmVkIHNjcmVlbiBzaXplIGZvciBrZXkgXCIgKyBpbnB1dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29tcGFyaXNvbiA9PSBcImx0ZVwiKSB7XG4gICAgICAgICAgICBzaXplID0gc2l6ZSAtIDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYCgke2NvbXBhcmlzb24gPT0gXCJndGVcIiA/IFwibWluLXdpZHRoXCIgOiBcIm1heC13aWR0aFwifTogJHtzaXplfXB4KWA7XG59XG5cbkBQaXBlKHtcbiAgICBuYW1lOiBcIm1hdGNoR3JlYXRlcldpZHRoXCIsXG4gICAgcHVyZTogZmFsc2Vcbn0pXG5leHBvcnQgY2xhc3MgTWF0Y2hXaWR0aEdyZWF0ZXJQaXBlIGV4dGVuZHMgTWF0Y2hNZWRpYVBpcGUge1xuXG4gICAgcHJvdGVjdGVkIHByZXBhcmVRdWVyeShxdWVyeTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBidWlsZE1lZGlhUXVlcnkoXCJndGVcIiwgcXVlcnkpO1xuICAgIH1cblxufVxuXG5AUGlwZSh7XG4gICAgbmFtZTogXCJtYXRjaExlc3NlcldpZHRoXCIsXG4gICAgcHVyZTogZmFsc2Vcbn0pXG5leHBvcnQgY2xhc3MgTWF0Y2hMZXNzZXJXaWR0aFBpcGUgZXh0ZW5kcyBNYXRjaE1lZGlhUGlwZSB7XG5cbiAgICBwcm90ZWN0ZWQgcHJlcGFyZVF1ZXJ5KHF1ZXJ5OiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIGJ1aWxkTWVkaWFRdWVyeShcImx0ZVwiLCBxdWVyeSk7XG4gICAgfVxuXG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcIltpZk1hdGNoR3JlYXRlcldpZHRoXVwiXG59KVxuZXhwb3J0IGNsYXNzIElmTWF0Y2hHcmVhdGVyV2lkdGhEaXJlY3RpdmUge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiwgcHJpdmF0ZSB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmKSB7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBzZXQgaWZNYXRjaEdyZWF0ZXJXaWR0aChtaW5XaWR0aDogc3RyaW5nKSB7XG5cbiAgICAgICAgbGV0IG1hdGNoZXMgPSB3aW5kb3cubWF0Y2hNZWRpYShidWlsZE1lZGlhUXVlcnkoXCJndGVcIiwgbWluV2lkdGgpKS5tYXRjaGVzO1xuXG4gICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMudGVtcGxhdGUpO1xuICAgICAgICB9IGVsc2UgaWYgKCFtYXRjaGVzKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXdDb250YWluZXIuY2xlYXIoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwiW2lmTWF0Y2hMZXNzZXJXaWR0aF1cIlxufSlcbmV4cG9ydCBjbGFzcyBJZk1hdGNoTGVzc2VyV2lkdGhEaXJlY3RpdmUge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiwgcHJpdmF0ZSB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmKSB7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBzZXQgaWZNYXRjaExlc3NlcldpZHRoKG1heFdpZHRoOiBzdHJpbmcpIHtcblxuICAgICAgICBsZXQgbWF0Y2hlcyA9IHdpbmRvdy5tYXRjaE1lZGlhKGJ1aWxkTWVkaWFRdWVyeShcImx0ZVwiLCBtYXhXaWR0aCkpLm1hdGNoZXM7XG5cbiAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAgIHRoaXMudmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoIW1hdGNoZXMpIHtcbiAgICAgICAgICAgIHRoaXMudmlld0NvbnRhaW5lci5jbGVhcigpO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==