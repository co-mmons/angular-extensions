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

var SafeStylePipe = /** @class */ (function () {
    function SafeStylePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeStylePipe.prototype.transform = function (style) {
        return this.sanitizer.bypassSecurityTrustStyle(style);
    };
    SafeStylePipe.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    SafeStylePipe = __decorate([
        Pipe({
            name: "safeStyle"
        })
    ], SafeStylePipe);
    return SafeStylePipe;
}());

var SafeStyleUrlPipe = /** @class */ (function () {
    function SafeStyleUrlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeStyleUrlPipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustStyle("url(" + url + ")");
    };
    SafeStyleUrlPipe.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    SafeStyleUrlPipe = __decorate([
        Pipe({
            name: "safeStyleUrl"
        })
    ], SafeStyleUrlPipe);
    return SafeStyleUrlPipe;
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
            declarations: [SafeHtmlPipe, SafeUrlPipe, SafeStylePipe, SafeStyleUrlPipe],
            exports: [SafeHtmlPipe, SafeUrlPipe, SafeStylePipe, SafeStyleUrlPipe]
        })
    ], DomSanitizerModule);
    return DomSanitizerModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DomSanitizerModule, SafeHtmlPipe as ɵa, SafeUrlPipe as ɵb, SafeStylePipe as ɵc, SafeStyleUrlPipe as ɵd };
//# sourceMappingURL=commons-angular-extensions-dom-sanitizer.js.map
