import * as tslib_1 from "tslib";
import { Pipe } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
let SafeHtmlPipe = class SafeHtmlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(key) {
        return this.sanitizer.bypassSecurityTrustHtml(key);
    }
};
SafeHtmlPipe = tslib_1.__decorate([
    Pipe({
        name: "safeHtml"
    }),
    tslib_1.__metadata("design:paramtypes", [DomSanitizer])
], SafeHtmlPipe);
export { SafeHtmlPipe };
//# sourceMappingURL=safe-html-pipe.js.map