import { __decorate } from "tslib";
import { NgModule } from "@angular/core";
import { MatchMediaPipe, IfMatchMediaDirective } from "./match-media";
import { MatchWidthGreaterPipe, MatchLesserWidthPipe, IfMatchGreaterWidthDirective, IfMatchLesserWidthDirective } from "./match-width";
export * from "./match-media";
export * from "./match-width";
let MatchMediaModule = class MatchMediaModule {
};
MatchMediaModule = __decorate([
    NgModule({
        declarations: [MatchMediaPipe, IfMatchMediaDirective, MatchWidthGreaterPipe, MatchLesserWidthPipe, IfMatchGreaterWidthDirective, IfMatchLesserWidthDirective],
        exports: [MatchMediaPipe, IfMatchMediaDirective, MatchWidthGreaterPipe, MatchLesserWidthPipe, IfMatchGreaterWidthDirective, IfMatchLesserWidthDirective]
    })
], MatchMediaModule);
export { MatchMediaModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY28ubW1vbnMvYW5ndWxhci1leHRlbnNpb25zL2Jyb3dzZXIvbWF0Y2gtbWVkaWEvIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV2QyxPQUFPLEVBQUMsY0FBYyxFQUFFLHFCQUFxQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxxQkFBcUIsRUFBRSxvQkFBb0IsRUFBRSw0QkFBNEIsRUFBRSwyQkFBMkIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUVySSxjQUFjLGVBQWUsQ0FBQztBQUM5QixjQUFjLGVBQWUsQ0FBQztBQU05QixJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtDQUM1QixDQUFBO0FBRFksZ0JBQWdCO0lBSjVCLFFBQVEsQ0FBQztRQUNOLFlBQVksRUFBRSxDQUFDLGNBQWMsRUFBRSxxQkFBcUIsRUFBRSxxQkFBcUIsRUFBRSxvQkFBb0IsRUFBRSw0QkFBNEIsRUFBRSwyQkFBMkIsQ0FBQztRQUM3SixPQUFPLEVBQUUsQ0FBQyxjQUFjLEVBQUUscUJBQXFCLEVBQUUscUJBQXFCLEVBQUUsb0JBQW9CLEVBQUUsNEJBQTRCLEVBQUUsMkJBQTJCLENBQUM7S0FDM0osQ0FBQztHQUNXLGdCQUFnQixDQUM1QjtTQURZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7TWF0Y2hNZWRpYVBpcGUsIElmTWF0Y2hNZWRpYURpcmVjdGl2ZX0gZnJvbSBcIi4vbWF0Y2gtbWVkaWFcIjtcbmltcG9ydCB7TWF0Y2hXaWR0aEdyZWF0ZXJQaXBlLCBNYXRjaExlc3NlcldpZHRoUGlwZSwgSWZNYXRjaEdyZWF0ZXJXaWR0aERpcmVjdGl2ZSwgSWZNYXRjaExlc3NlcldpZHRoRGlyZWN0aXZlfSBmcm9tIFwiLi9tYXRjaC13aWR0aFwiO1xuXG5leHBvcnQgKiBmcm9tIFwiLi9tYXRjaC1tZWRpYVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vbWF0Y2gtd2lkdGhcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtNYXRjaE1lZGlhUGlwZSwgSWZNYXRjaE1lZGlhRGlyZWN0aXZlLCBNYXRjaFdpZHRoR3JlYXRlclBpcGUsIE1hdGNoTGVzc2VyV2lkdGhQaXBlLCBJZk1hdGNoR3JlYXRlcldpZHRoRGlyZWN0aXZlLCBJZk1hdGNoTGVzc2VyV2lkdGhEaXJlY3RpdmVdLFxuICAgIGV4cG9ydHM6IFtNYXRjaE1lZGlhUGlwZSwgSWZNYXRjaE1lZGlhRGlyZWN0aXZlLCBNYXRjaFdpZHRoR3JlYXRlclBpcGUsIE1hdGNoTGVzc2VyV2lkdGhQaXBlLCBJZk1hdGNoR3JlYXRlcldpZHRoRGlyZWN0aXZlLCBJZk1hdGNoTGVzc2VyV2lkdGhEaXJlY3RpdmVdXG59KVxuZXhwb3J0IGNsYXNzIE1hdGNoTWVkaWFNb2R1bGUge1xufSJdfQ==