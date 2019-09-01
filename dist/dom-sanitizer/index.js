import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { SafeHtmlPipe } from "./safe-html-pipe";
import { SafeUrlPipe } from "./safe-url-pipe";
var DomSanitizerModule = /** @class */ (function () {
    function DomSanitizerModule() {
    }
    DomSanitizerModule = tslib_1.__decorate([
        NgModule({
            declarations: [SafeHtmlPipe, SafeUrlPipe],
            exports: [SafeHtmlPipe, SafeUrlPipe]
        })
    ], DomSanitizerModule);
    return DomSanitizerModule;
}());
export { DomSanitizerModule };
//# sourceMappingURL=index.js.map