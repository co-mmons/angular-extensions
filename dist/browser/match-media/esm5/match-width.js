import { __decorate, __extends } from "tslib";
import { Pipe, PipeTransform, Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";
import { ScreenSizeMinWidth } from "./screen-size";
import { MatchMediaPipe } from "./match-media";
function buildMediaQuery(comparison, input) {
    var size = input;
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
    return "(" + (comparison == "gte" ? "min-width" : "max-width") + ": " + size + "px)";
}
var MatchWidthGreaterPipe = /** @class */ (function (_super) {
    __extends(MatchWidthGreaterPipe, _super);
    function MatchWidthGreaterPipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatchWidthGreaterPipe.prototype.prepareQuery = function (query) {
        return buildMediaQuery("gte", query);
    };
    MatchWidthGreaterPipe = __decorate([
        Pipe({
            name: "matchGreaterWidth",
            pure: false
        })
    ], MatchWidthGreaterPipe);
    return MatchWidthGreaterPipe;
}(MatchMediaPipe));
export { MatchWidthGreaterPipe };
var MatchLesserWidthPipe = /** @class */ (function (_super) {
    __extends(MatchLesserWidthPipe, _super);
    function MatchLesserWidthPipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatchLesserWidthPipe.prototype.prepareQuery = function (query) {
        return buildMediaQuery("lte", query);
    };
    MatchLesserWidthPipe = __decorate([
        Pipe({
            name: "matchLesserWidth",
            pure: false
        })
    ], MatchLesserWidthPipe);
    return MatchLesserWidthPipe;
}(MatchMediaPipe));
export { MatchLesserWidthPipe };
var IfMatchGreaterWidthDirective = /** @class */ (function () {
    function IfMatchGreaterWidthDirective(template, viewContainer) {
        this.template = template;
        this.viewContainer = viewContainer;
    }
    Object.defineProperty(IfMatchGreaterWidthDirective.prototype, "ifMatchGreaterWidth", {
        set: function (minWidth) {
            var matches = window.matchMedia(buildMediaQuery("gte", minWidth)).matches;
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
    IfMatchGreaterWidthDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: ViewContainerRef }
    ]; };
    __decorate([
        Input()
    ], IfMatchGreaterWidthDirective.prototype, "ifMatchGreaterWidth", null);
    IfMatchGreaterWidthDirective = __decorate([
        Directive({
            selector: "[ifMatchGreaterWidth]"
        })
    ], IfMatchGreaterWidthDirective);
    return IfMatchGreaterWidthDirective;
}());
export { IfMatchGreaterWidthDirective };
var IfMatchLesserWidthDirective = /** @class */ (function () {
    function IfMatchLesserWidthDirective(template, viewContainer) {
        this.template = template;
        this.viewContainer = viewContainer;
    }
    Object.defineProperty(IfMatchLesserWidthDirective.prototype, "ifMatchLesserWidth", {
        set: function (maxWidth) {
            var matches = window.matchMedia(buildMediaQuery("lte", maxWidth)).matches;
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
    IfMatchLesserWidthDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: ViewContainerRef }
    ]; };
    __decorate([
        Input()
    ], IfMatchLesserWidthDirective.prototype, "ifMatchLesserWidth", null);
    IfMatchLesserWidthDirective = __decorate([
        Directive({
            selector: "[ifMatchLesserWidth]"
        })
    ], IfMatchLesserWidthDirective);
    return IfMatchLesserWidthDirective;
}());
export { IfMatchLesserWidthDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2gtd2lkdGguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY28ubW1vbnMvYW5ndWxhci1leHRlbnNpb25zL2Jyb3dzZXIvbWF0Y2gtbWVkaWEvIiwic291cmNlcyI6WyJtYXRjaC13aWR0aC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDbkcsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFN0MsU0FBUyxlQUFlLENBQUMsVUFBeUIsRUFBRSxLQUFhO0lBRTdELElBQUksSUFBSSxHQUFRLEtBQUssQ0FBQztJQUV0QixnQ0FBZ0M7SUFDaEMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ3RCLElBQUksR0FBRyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVqQyxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDcEIsTUFBTSxJQUFJLEtBQUssQ0FBQyw2Q0FBNkMsR0FBRyxLQUFLLENBQUMsQ0FBQztTQUMxRTtRQUVELElBQUksVUFBVSxJQUFJLEtBQUssRUFBRTtZQUNyQixJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQztTQUNuQjtLQUNKO0lBRUQsT0FBTyxPQUFJLFVBQVUsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsV0FBVyxXQUFLLElBQUksUUFBSyxDQUFDO0FBQzdFLENBQUM7QUFNRDtJQUEyQyx5Q0FBYztJQUF6RDs7SUFNQSxDQUFDO0lBSmEsNENBQVksR0FBdEIsVUFBdUIsS0FBYTtRQUNoQyxPQUFPLGVBQWUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUpRLHFCQUFxQjtRQUpqQyxJQUFJLENBQUM7WUFDRixJQUFJLEVBQUUsbUJBQW1CO1lBQ3pCLElBQUksRUFBRSxLQUFLO1NBQ2QsQ0FBQztPQUNXLHFCQUFxQixDQU1qQztJQUFELDRCQUFDO0NBQUEsQUFORCxDQUEyQyxjQUFjLEdBTXhEO1NBTlkscUJBQXFCO0FBWWxDO0lBQTBDLHdDQUFjO0lBQXhEOztJQU1BLENBQUM7SUFKYSwyQ0FBWSxHQUF0QixVQUF1QixLQUFhO1FBQ2hDLE9BQU8sZUFBZSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBSlEsb0JBQW9CO1FBSmhDLElBQUksQ0FBQztZQUNGLElBQUksRUFBRSxrQkFBa0I7WUFDeEIsSUFBSSxFQUFFLEtBQUs7U0FDZCxDQUFDO09BQ1csb0JBQW9CLENBTWhDO0lBQUQsMkJBQUM7Q0FBQSxBQU5ELENBQTBDLGNBQWMsR0FNdkQ7U0FOWSxvQkFBb0I7QUFXakM7SUFFSSxzQ0FBb0IsUUFBMEIsRUFBVSxhQUErQjtRQUFuRSxhQUFRLEdBQVIsUUFBUSxDQUFrQjtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtJQUN2RixDQUFDO0lBR0Qsc0JBQUksNkRBQW1CO2FBQXZCLFVBQXdCLFFBQWdCO1lBRXBDLElBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUUxRSxJQUFJLE9BQU8sRUFBRTtnQkFDVCxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUN4RDtpQkFBTSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNqQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQzlCO1FBQ0wsQ0FBQzs7O09BQUE7O2dCQWI2QixXQUFXO2dCQUE4QixnQkFBZ0I7O0lBSXZGO1FBREMsS0FBSyxFQUFFOzJFQVVQO0lBZlEsNEJBQTRCO1FBSHhDLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSx1QkFBdUI7U0FDcEMsQ0FBQztPQUNXLDRCQUE0QixDQWdCeEM7SUFBRCxtQ0FBQztDQUFBLEFBaEJELElBZ0JDO1NBaEJZLDRCQUE0QjtBQXFCekM7SUFFSSxxQ0FBb0IsUUFBMEIsRUFBVSxhQUErQjtRQUFuRSxhQUFRLEdBQVIsUUFBUSxDQUFrQjtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtJQUN2RixDQUFDO0lBR0Qsc0JBQUksMkRBQWtCO2FBQXRCLFVBQXVCLFFBQWdCO1lBRW5DLElBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUUxRSxJQUFJLE9BQU8sRUFBRTtnQkFDVCxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUN4RDtpQkFBTSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNqQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQzlCO1FBQ0wsQ0FBQzs7O09BQUE7O2dCQWI2QixXQUFXO2dCQUE4QixnQkFBZ0I7O0lBSXZGO1FBREMsS0FBSyxFQUFFO3lFQVVQO0lBZlEsMkJBQTJCO1FBSHZDLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxzQkFBc0I7U0FDbkMsQ0FBQztPQUNXLDJCQUEyQixDQWdCdkM7SUFBRCxrQ0FBQztDQUFBLEFBaEJELElBZ0JDO1NBaEJZLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybSwgRGlyZWN0aXZlLCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiwgSW5wdXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1NjcmVlblNpemVNaW5XaWR0aH0gZnJvbSBcIi4vc2NyZWVuLXNpemVcIjtcbmltcG9ydCB7TWF0Y2hNZWRpYVBpcGV9IGZyb20gXCIuL21hdGNoLW1lZGlhXCI7XG5cbmZ1bmN0aW9uIGJ1aWxkTWVkaWFRdWVyeShjb21wYXJpc29uOiBcImx0ZVwiIHwgXCJndGVcIiwgaW5wdXQ6IHN0cmluZyk6IHN0cmluZyB7XG5cbiAgICBsZXQgc2l6ZTogYW55ID0gaW5wdXQ7XG5cbiAgICAvLyB3aGVuIHByZWRlZmluZWQgc2l6ZSBpcyBnaXZlblxuICAgIGlmIChpbnB1dC5tYXRjaCgvXlxcRCskLykpIHtcbiAgICAgICAgc2l6ZSA9IFNjcmVlblNpemVNaW5XaWR0aFtpbnB1dF07XG5cbiAgICAgICAgaWYgKHNpemUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgcHJlZGVmaW5lZCBzY3JlZW4gc2l6ZSBmb3Iga2V5IFwiICsgaW5wdXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbXBhcmlzb24gPT0gXCJsdGVcIikge1xuICAgICAgICAgICAgc2l6ZSA9IHNpemUgLSAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGAoJHtjb21wYXJpc29uID09IFwiZ3RlXCIgPyBcIm1pbi13aWR0aFwiIDogXCJtYXgtd2lkdGhcIn06ICR7c2l6ZX1weClgO1xufVxuXG5AUGlwZSh7XG4gICAgbmFtZTogXCJtYXRjaEdyZWF0ZXJXaWR0aFwiLFxuICAgIHB1cmU6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIE1hdGNoV2lkdGhHcmVhdGVyUGlwZSBleHRlbmRzIE1hdGNoTWVkaWFQaXBlIHtcblxuICAgIHByb3RlY3RlZCBwcmVwYXJlUXVlcnkocXVlcnk6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gYnVpbGRNZWRpYVF1ZXJ5KFwiZ3RlXCIsIHF1ZXJ5KTtcbiAgICB9XG5cbn1cblxuQFBpcGUoe1xuICAgIG5hbWU6IFwibWF0Y2hMZXNzZXJXaWR0aFwiLFxuICAgIHB1cmU6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIE1hdGNoTGVzc2VyV2lkdGhQaXBlIGV4dGVuZHMgTWF0Y2hNZWRpYVBpcGUge1xuXG4gICAgcHJvdGVjdGVkIHByZXBhcmVRdWVyeShxdWVyeTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBidWlsZE1lZGlhUXVlcnkoXCJsdGVcIiwgcXVlcnkpO1xuICAgIH1cblxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbaWZNYXRjaEdyZWF0ZXJXaWR0aF1cIlxufSlcbmV4cG9ydCBjbGFzcyBJZk1hdGNoR3JlYXRlcldpZHRoRGlyZWN0aXZlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4sIHByaXZhdGUgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZikge1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IGlmTWF0Y2hHcmVhdGVyV2lkdGgobWluV2lkdGg6IHN0cmluZykge1xuXG4gICAgICAgIGxldCBtYXRjaGVzID0gd2luZG93Lm1hdGNoTWVkaWEoYnVpbGRNZWRpYVF1ZXJ5KFwiZ3RlXCIsIG1pbldpZHRoKSkubWF0Y2hlcztcblxuICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgdGhpcy52aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLnRlbXBsYXRlKTtcbiAgICAgICAgfSBlbHNlIGlmICghbWF0Y2hlcykge1xuICAgICAgICAgICAgdGhpcy52aWV3Q29udGFpbmVyLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcIltpZk1hdGNoTGVzc2VyV2lkdGhdXCJcbn0pXG5leHBvcnQgY2xhc3MgSWZNYXRjaExlc3NlcldpZHRoRGlyZWN0aXZlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4sIHByaXZhdGUgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZikge1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IGlmTWF0Y2hMZXNzZXJXaWR0aChtYXhXaWR0aDogc3RyaW5nKSB7XG5cbiAgICAgICAgbGV0IG1hdGNoZXMgPSB3aW5kb3cubWF0Y2hNZWRpYShidWlsZE1lZGlhUXVlcnkoXCJsdGVcIiwgbWF4V2lkdGgpKS5tYXRjaGVzO1xuXG4gICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMudGVtcGxhdGUpO1xuICAgICAgICB9IGVsc2UgaWYgKCFtYXRjaGVzKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXdDb250YWluZXIuY2xlYXIoKTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=