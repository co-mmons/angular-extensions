import * as tslib_1 from "tslib";
import { Pipe } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
var SafeHtmlPipe = /** @class */ (function () {
    function SafeHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeHtmlPipe.prototype.transform = function (key) {
        return this.sanitizer.bypassSecurityTrustHtml(key);
    };
    SafeHtmlPipe = tslib_1.__decorate([
        Pipe({
            name: "safeHtml"
        }),
        tslib_1.__metadata("design:paramtypes", [DomSanitizer])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());
export { SafeHtmlPipe };
//# sourceMappingURL=safe-html-pipe.js.map