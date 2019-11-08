import * as tslib_1 from "tslib";
import { Pipe, PipeTransform, Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";
let MatchMediaPipe = class MatchMediaPipe {
    transform(query) {
        if (query != this.query) {
            this.destroy();
            this.queryList = window.matchMedia(this.prepareQuery(query));
        }
        return this.queryList.matches;
    }
    prepareQuery(inputQuery) {
        return inputQuery;
    }
    destroy() {
        this.queryList = null;
    }
    ngOnDestroy() {
        this.destroy;
    }
};
MatchMediaPipe = tslib_1.__decorate([
    Pipe({
        name: "matchMedia",
        pure: false
    })
], MatchMediaPipe);
export { MatchMediaPipe };
let IfMatchMediaDirective = class IfMatchMediaDirective {
    constructor(template, viewContainer) {
        this.template = template;
        this.viewContainer = viewContainer;
    }
    set ifMatchMedia(query) {
        let matches = window.matchMedia(query).matches;
        if (matches) {
            this.viewContainer.createEmbeddedView(this.template);
        }
        else if (!matches) {
            this.viewContainer.clear();
        }
    }
};
IfMatchMediaDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef }
];
tslib_1.__decorate([
    Input()
], IfMatchMediaDirective.prototype, "ifMatchMedia", null);
IfMatchMediaDirective = tslib_1.__decorate([
    Directive({
        selector: "[ifMatchMedia]"
    })
], IfMatchMediaDirective);
export { IfMatchMediaDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2gtbWVkaWEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY28ubW1vbnMvYW5ndWxhci1leHRlbnNpb25zL2Jyb3dzZXIvbWF0Y2gtbWVkaWEvIiwic291cmNlcyI6WyJtYXRjaC1tZWRpYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFNbkcsSUFBYSxjQUFjLEdBQTNCLE1BQWEsY0FBYztJQUV2QixTQUFTLENBQUMsS0FBYTtRQUVuQixJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDaEU7UUFFRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO0lBQ2xDLENBQUM7SUFFUyxZQUFZLENBQUMsVUFBa0I7UUFDckMsT0FBTyxVQUFVLENBQUM7SUFDdEIsQ0FBQztJQU1PLE9BQU87UUFDWCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDO0lBRUQsV0FBVztRQUNQLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDakIsQ0FBQztDQUVKLENBQUE7QUE1QlksY0FBYztJQUoxQixJQUFJLENBQUM7UUFDRixJQUFJLEVBQUUsWUFBWTtRQUNsQixJQUFJLEVBQUUsS0FBSztLQUNkLENBQUM7R0FDVyxjQUFjLENBNEIxQjtTQTVCWSxjQUFjO0FBaUMzQixJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFxQjtJQUU5QixZQUFvQixRQUEwQixFQUFVLGFBQStCO1FBQW5FLGFBQVEsR0FBUixRQUFRLENBQWtCO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWtCO0lBQ3ZGLENBQUM7SUFHRCxJQUFJLFlBQVksQ0FBQyxLQUFhO1FBRTFCLElBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBRS9DLElBQUksT0FBTyxFQUFFO1lBQ1QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDeEQ7YUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDOUI7SUFDTCxDQUFDO0NBQ0osQ0FBQTs7WUFkaUMsV0FBVztZQUE4QixnQkFBZ0I7O0FBSXZGO0lBREMsS0FBSyxFQUFFO3lEQVVQO0FBZlEscUJBQXFCO0lBSGpDLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxnQkFBZ0I7S0FDN0IsQ0FBQztHQUNXLHFCQUFxQixDQWdCakM7U0FoQlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtLCBEaXJlY3RpdmUsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmLCBJbnB1dH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQFBpcGUoe1xuICAgIG5hbWU6IFwibWF0Y2hNZWRpYVwiLFxuICAgIHB1cmU6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIE1hdGNoTWVkaWFQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgICB0cmFuc2Zvcm0ocXVlcnk6IHN0cmluZyk6IGJvb2xlYW4ge1xuXG4gICAgICAgIGlmIChxdWVyeSAhPSB0aGlzLnF1ZXJ5KSB7XG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMucXVlcnlMaXN0ID0gd2luZG93Lm1hdGNoTWVkaWEodGhpcy5wcmVwYXJlUXVlcnkocXVlcnkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5TGlzdC5tYXRjaGVzO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBwcmVwYXJlUXVlcnkoaW5wdXRRdWVyeTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBpbnB1dFF1ZXJ5O1xuICAgIH1cblxuICAgIHByaXZhdGUgcXVlcnlMaXN0OiBNZWRpYVF1ZXJ5TGlzdDtcblxuICAgIHByaXZhdGUgcXVlcnk6IHN0cmluZztcblxuICAgIHByaXZhdGUgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5xdWVyeUxpc3QgPSBudWxsO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmRlc3Ryb3k7XG4gICAgfVxuXG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcIltpZk1hdGNoTWVkaWFdXCJcbn0pXG5leHBvcnQgY2xhc3MgSWZNYXRjaE1lZGlhRGlyZWN0aXZlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4sIHByaXZhdGUgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZikge1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IGlmTWF0Y2hNZWRpYShxdWVyeTogc3RyaW5nKSB7XG5cbiAgICAgICAgbGV0IG1hdGNoZXMgPSB3aW5kb3cubWF0Y2hNZWRpYShxdWVyeSkubWF0Y2hlcztcblxuICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgdGhpcy52aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLnRlbXBsYXRlKTtcbiAgICAgICAgfSBlbHNlIGlmICghbWF0Y2hlcykge1xuICAgICAgICAgICAgdGhpcy52aWV3Q29udGFpbmVyLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=