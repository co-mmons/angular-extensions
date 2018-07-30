import {NgModule} from "@angular/core";

import {MatchMediaPipe, IfMatchMediaDirective} from "./match-media";
import {MatchWidthGreaterPipe, MatchLesserWidthPipe, IfMatchGreaterWidthDirective, IfMatchLesserWidthDirective} from "./match-width";

export * from "./match-media";
export * from "./match-width";

@NgModule({
    declarations: [MatchMediaPipe, IfMatchMediaDirective, MatchWidthGreaterPipe, MatchLesserWidthPipe, IfMatchGreaterWidthDirective, IfMatchLesserWidthDirective],
    exports: [MatchMediaPipe, IfMatchMediaDirective, MatchWidthGreaterPipe, MatchLesserWidthPipe, IfMatchGreaterWidthDirective, IfMatchLesserWidthDirective]
})
export class MatchMediaModule {
}