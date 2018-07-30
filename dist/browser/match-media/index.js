var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { MatchMediaPipe, IfMatchMediaDirective } from "./match-media";
import { MatchWidthGreaterPipe, MatchLesserWidthPipe, IfMatchGreaterWidthDirective, IfMatchLesserWidthDirective } from "./match-width";
export * from "./match-media";
export * from "./match-width";
var MatchMediaModule = /** @class */ (function () {
    function MatchMediaModule() {
    }
    MatchMediaModule = __decorate([
        NgModule({
            declarations: [MatchMediaPipe, IfMatchMediaDirective, MatchWidthGreaterPipe, MatchLesserWidthPipe, IfMatchGreaterWidthDirective, IfMatchLesserWidthDirective],
            exports: [MatchMediaPipe, IfMatchMediaDirective, MatchWidthGreaterPipe, MatchLesserWidthPipe, IfMatchGreaterWidthDirective, IfMatchLesserWidthDirective]
        })
    ], MatchMediaModule);
    return MatchMediaModule;
}());
export { MatchMediaModule };
//# sourceMappingURL=index.js.map