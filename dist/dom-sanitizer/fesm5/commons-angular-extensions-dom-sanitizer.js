import { __decorate } from 'tslib';
import { Pipe, NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

var SafeHtmlPipe = /** @class */ (function () {
    function SafeHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeHtmlPipe.prototype.transform = function (key) {
        return this.sanitizer.bypassSecurityTrustHtml(key);
    };
    SafeHtmlPipe.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    SafeHtmlPipe = __decorate([
        Pipe({
            name: "safeHtml"
        })
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());

var SafeUrlPipe = /** @class */ (function () {
    function SafeUrlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeUrlPipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustUrl(url);
    };
    SafeUrlPipe.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    SafeUrlPipe = __decorate([
        Pipe({
            name: "safeUrl"
        })
    ], SafeUrlPipe);
    return SafeUrlPipe;
}());

var DomSanitizerModule = /** @class */ (function () {
    function DomSanitizerModule() {
    }
    DomSanitizerModule = __decorate([
        NgModule({
            declarations: [SafeHtmlPipe, SafeUrlPipe],
            exports: [SafeHtmlPipe, SafeUrlPipe]
        })
    ], DomSanitizerModule);
    return DomSanitizerModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DomSanitizerModule, SafeHtmlPipe as ɵa, SafeUrlPipe as ɵb };
//# sourceMappingURL=commons-angular-extensions-dom-sanitizer.js.map
