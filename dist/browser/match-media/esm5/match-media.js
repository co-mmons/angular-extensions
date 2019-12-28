import { __decorate } from "tslib";
import { Pipe, PipeTransform, Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";
var MatchMediaPipe = /** @class */ (function () {
    function MatchMediaPipe() {
    }
    MatchMediaPipe.prototype.transform = function (query) {
        if (query != this.query) {
            this.destroy();
            this.queryList = window.matchMedia(this.prepareQuery(query));
        }
        return this.queryList.matches;
    };
    MatchMediaPipe.prototype.prepareQuery = function (inputQuery) {
        return inputQuery;
    };
    MatchMediaPipe.prototype.destroy = function () {
        this.queryList = null;
    };
    MatchMediaPipe.prototype.ngOnDestroy = function () {
        this.destroy;
    };
    MatchMediaPipe = __decorate([
        Pipe({
            name: "matchMedia",
            pure: false
        })
    ], MatchMediaPipe);
    return MatchMediaPipe;
}());
export { MatchMediaPipe };
var IfMatchMediaDirective = /** @class */ (function () {
    function IfMatchMediaDirective(template, viewContainer) {
        this.template = template;
        this.viewContainer = viewContainer;
    }
    Object.defineProperty(IfMatchMediaDirective.prototype, "ifMatchMedia", {
        set: function (query) {
            var matches = window.matchMedia(query).matches;
            if (matches) {
                this.viewContainer.createEmbeddedView(this.template);
            }
            else if (!matches) {
                this.viewContainer.clear();
            }
        },
        enumerable: true,
        configurable: true
    });
    IfMatchMediaDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: ViewContainerRef }
    ]; };
    __decorate([
        Input()
    ], IfMatchMediaDirective.prototype, "ifMatchMedia", null);
    IfMatchMediaDirective = __decorate([
        Directive({
            selector: "[ifMatchMedia]"
        })
    ], IfMatchMediaDirective);
    return IfMatchMediaDirective;
}());
export { IfMatchMediaDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2gtbWVkaWEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY28ubW1vbnMvYW5ndWxhci1leHRlbnNpb25zL2Jyb3dzZXIvbWF0Y2gtbWVkaWEvIiwic291cmNlcyI6WyJtYXRjaC1tZWRpYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFNbkc7SUFBQTtJQTRCQSxDQUFDO0lBMUJHLGtDQUFTLEdBQVQsVUFBVSxLQUFhO1FBRW5CLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDckIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2YsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUNoRTtRQUVELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7SUFDbEMsQ0FBQztJQUVTLHFDQUFZLEdBQXRCLFVBQXVCLFVBQWtCO1FBQ3JDLE9BQU8sVUFBVSxDQUFDO0lBQ3RCLENBQUM7SUFNTyxnQ0FBTyxHQUFmO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDMUIsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUExQlEsY0FBYztRQUoxQixJQUFJLENBQUM7WUFDRixJQUFJLEVBQUUsWUFBWTtZQUNsQixJQUFJLEVBQUUsS0FBSztTQUNkLENBQUM7T0FDVyxjQUFjLENBNEIxQjtJQUFELHFCQUFDO0NBQUEsQUE1QkQsSUE0QkM7U0E1QlksY0FBYztBQWlDM0I7SUFFSSwrQkFBb0IsUUFBMEIsRUFBVSxhQUErQjtRQUFuRSxhQUFRLEdBQVIsUUFBUSxDQUFrQjtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtJQUN2RixDQUFDO0lBR0Qsc0JBQUksK0NBQVk7YUFBaEIsVUFBaUIsS0FBYTtZQUUxQixJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUUvQyxJQUFJLE9BQU8sRUFBRTtnQkFDVCxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUN4RDtpQkFBTSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNqQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQzlCO1FBQ0wsQ0FBQzs7O09BQUE7O2dCQWI2QixXQUFXO2dCQUE4QixnQkFBZ0I7O0lBSXZGO1FBREMsS0FBSyxFQUFFOzZEQVVQO0lBZlEscUJBQXFCO1FBSGpDLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxnQkFBZ0I7U0FDN0IsQ0FBQztPQUNXLHFCQUFxQixDQWdCakM7SUFBRCw0QkFBQztDQUFBLEFBaEJELElBZ0JDO1NBaEJZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybSwgRGlyZWN0aXZlLCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiwgSW5wdXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBQaXBlKHtcbiAgICBuYW1lOiBcIm1hdGNoTWVkaWFcIixcbiAgICBwdXJlOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBNYXRjaE1lZGlhUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gICAgdHJhbnNmb3JtKHF1ZXJ5OiBzdHJpbmcpOiBib29sZWFuIHtcblxuICAgICAgICBpZiAocXVlcnkgIT0gdGhpcy5xdWVyeSkge1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLnF1ZXJ5TGlzdCA9IHdpbmRvdy5tYXRjaE1lZGlhKHRoaXMucHJlcGFyZVF1ZXJ5KHF1ZXJ5KSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5xdWVyeUxpc3QubWF0Y2hlcztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcHJlcGFyZVF1ZXJ5KGlucHV0UXVlcnk6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gaW5wdXRRdWVyeTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHF1ZXJ5TGlzdDogTWVkaWFRdWVyeUxpc3Q7XG5cbiAgICBwcml2YXRlIHF1ZXJ5OiBzdHJpbmc7XG5cbiAgICBwcml2YXRlIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMucXVlcnlMaXN0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5kZXN0cm95O1xuICAgIH1cblxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbaWZNYXRjaE1lZGlhXVwiXG59KVxuZXhwb3J0IGNsYXNzIElmTWF0Y2hNZWRpYURpcmVjdGl2ZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+LCBwcml2YXRlIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBpZk1hdGNoTWVkaWEocXVlcnk6IHN0cmluZykge1xuXG4gICAgICAgIGxldCBtYXRjaGVzID0gd2luZG93Lm1hdGNoTWVkaWEocXVlcnkpLm1hdGNoZXM7XG5cbiAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAgIHRoaXMudmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoIW1hdGNoZXMpIHtcbiAgICAgICAgICAgIHRoaXMudmlld0NvbnRhaW5lci5jbGVhcigpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19