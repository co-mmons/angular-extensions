import { __decorate } from 'tslib';
import { Pipe, NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

let SafeHtmlPipe = class SafeHtmlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(key) {
        return this.sanitizer.bypassSecurityTrustHtml(key);
    }
};
SafeHtmlPipe.ctorParameters = () => [
    { type: DomSanitizer }
];
SafeHtmlPipe = __decorate([
    Pipe({
        name: "safeHtml"
    })
], SafeHtmlPipe);

let SafeUrlPipe = class SafeUrlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustUrl(url);
    }
};
SafeUrlPipe.ctorParameters = () => [
    { type: DomSanitizer }
];
SafeUrlPipe = __decorate([
    Pipe({
        name: "safeUrl"
    })
], SafeUrlPipe);

let DomSanitizerModule = class DomSanitizerModule {
};
DomSanitizerModule = __decorate([
    NgModule({
        declarations: [SafeHtmlPipe, SafeUrlPipe],
        exports: [SafeHtmlPipe, SafeUrlPipe]
    })
], DomSanitizerModule);

/**
 * Generated bundle index. Do not edit.
 */

export { DomSanitizerModule, SafeHtmlPipe as ɵa, SafeUrlPipe as ɵb };
//# sourceMappingURL=commons-angular-extensions-dom-sanitizer.js.map
