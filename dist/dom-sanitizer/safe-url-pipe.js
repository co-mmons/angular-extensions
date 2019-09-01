import * as tslib_1 from "tslib";
import { Pipe } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
var SafeUrlPipe = /** @class */ (function () {
    function SafeUrlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeUrlPipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustUrl(url);
    };
    SafeUrlPipe = tslib_1.__decorate([
        Pipe({
            name: "safeUrl"
        }),
        tslib_1.__metadata("design:paramtypes", [DomSanitizer])
    ], SafeUrlPipe);
    return SafeUrlPipe;
}());
export { SafeUrlPipe };
//# sourceMappingURL=safe-url-pipe.js.map