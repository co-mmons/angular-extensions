import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { MatchMediaPipe, IfMatchMediaDirective } from "./match-media";
import { MatchWidthGreaterPipe, MatchLesserWidthPipe, IfMatchGreaterWidthDirective, IfMatchLesserWidthDirective } from "./match-width";
export * from "./match-media";
export * from "./match-width";
let MatchMediaModule = class MatchMediaModule {
};
MatchMediaModule = tslib_1.__decorate([
    NgModule({
        declarations: [MatchMediaPipe, IfMatchMediaDirective, MatchWidthGreaterPipe, MatchLesserWidthPipe, IfMatchGreaterWidthDirective, IfMatchLesserWidthDirective],
        exports: [MatchMediaPipe, IfMatchMediaDirective, MatchWidthGreaterPipe, MatchLesserWidthPipe, IfMatchGreaterWidthDirective, IfMatchLesserWidthDirective]
    })
], MatchMediaModule);
export { MatchMediaModule };
//# sourceMappingURL=index.js.map