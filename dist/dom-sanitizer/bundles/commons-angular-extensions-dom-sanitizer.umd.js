(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('@co.mmons/angular-extensions/dom-sanitizer', ['exports', '@angular/core', '@angular/platform-browser'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.co = global.co || {}, global.co.mmons = global.co.mmons || {}, global.co.mmons['angular-extensions'] = global.co.mmons['angular-extensions'] || {}, global.co.mmons['angular-extensions']['dom-sanitizer'] = {}), global.ng.core, global.ng.platformBrowser));
}(this, (function (exports, core, platformBrowser) { 'use strict';

    var SafeHtmlPipe = /** @class */ (function () {
        function SafeHtmlPipe(sanitizer) {
            this.sanitizer = sanitizer;
        }
        SafeHtmlPipe.prototype.transform = function (key) {
            return this.sanitizer.bypassSecurityTrustHtml(key);
        };
        return SafeHtmlPipe;
    }());
    SafeHtmlPipe.decorators = [
        { type: core.Pipe, args: [{
                    name: "safeHtml"
                },] }
    ];
    SafeHtmlPipe.ctorParameters = function () { return [
        { type: platformBrowser.DomSanitizer }
    ]; };

    var SafeStylePipe = /** @class */ (function () {
        function SafeStylePipe(sanitizer) {
            this.sanitizer = sanitizer;
        }
        SafeStylePipe.prototype.transform = function (style) {
            return this.sanitizer.bypassSecurityTrustStyle(style);
        };
        return SafeStylePipe;
    }());
    SafeStylePipe.decorators = [
        { type: core.Pipe, args: [{
                    name: "safeStyle"
                },] }
    ];
    SafeStylePipe.ctorParameters = function () { return [
        { type: platformBrowser.DomSanitizer }
    ]; };

    var SafeStyleUrlPipe = /** @class */ (function () {
        function SafeStyleUrlPipe(sanitizer) {
            this.sanitizer = sanitizer;
        }
        SafeStyleUrlPipe.prototype.transform = function (url) {
            return this.sanitizer.bypassSecurityTrustStyle("url(" + url + ")");
        };
        return SafeStyleUrlPipe;
    }());
    SafeStyleUrlPipe.decorators = [
        { type: core.Pipe, args: [{
                    name: "safeStyleUrl"
                },] }
    ];
    SafeStyleUrlPipe.ctorParameters = function () { return [
        { type: platformBrowser.DomSanitizer }
    ]; };

    var SafeUrlPipe = /** @class */ (function () {
        function SafeUrlPipe(sanitizer) {
            this.sanitizer = sanitizer;
        }
        SafeUrlPipe.prototype.transform = function (url) {
            return this.sanitizer.bypassSecurityTrustUrl(url);
        };
        return SafeUrlPipe;
    }());
    SafeUrlPipe.decorators = [
        { type: core.Pipe, args: [{
                    name: "safeUrl"
                },] }
    ];
    SafeUrlPipe.ctorParameters = function () { return [
        { type: platformBrowser.DomSanitizer }
    ]; };

    var DomSanitizerModule = /** @class */ (function () {
        function DomSanitizerModule() {
        }
        return DomSanitizerModule;
    }());
    DomSanitizerModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [SafeHtmlPipe, SafeUrlPipe, SafeStylePipe, SafeStyleUrlPipe],
                    exports: [SafeHtmlPipe, SafeUrlPipe, SafeStylePipe, SafeStyleUrlPipe]
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.DomSanitizerModule = DomSanitizerModule;
    exports.ɵa = SafeHtmlPipe;
    exports.ɵb = SafeUrlPipe;
    exports.ɵc = SafeStylePipe;
    exports.ɵd = SafeStyleUrlPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=commons-angular-extensions-dom-sanitizer.umd.js.map
