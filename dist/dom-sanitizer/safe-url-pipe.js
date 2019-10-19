import * as tslib_1 from "tslib";
import { Pipe } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
let SafeUrlPipe = class SafeUrlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustUrl(url);
    }
};
SafeUrlPipe = tslib_1.__decorate([
    Pipe({
        name: "safeUrl"
    }),
    tslib_1.__metadata("design:paramtypes", [DomSanitizer])
], SafeUrlPipe);
export { SafeUrlPipe };
//# sourceMappingURL=safe-url-pipe.js.map