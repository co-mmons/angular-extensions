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

let SafeStylePipe = class SafeStylePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(style) {
        return this.sanitizer.bypassSecurityTrustStyle(style);
    }
};
SafeStylePipe.ctorParameters = () => [
    { type: DomSanitizer }
];
SafeStylePipe = __decorate([
    Pipe({
        name: "safeStyle"
    })
], SafeStylePipe);

let SafeStyleUrlPipe = class SafeStyleUrlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustStyle(`url(${url})`);
    }
};
SafeStyleUrlPipe.ctorParameters = () => [
    { type: DomSanitizer }
];
SafeStyleUrlPipe = __decorate([
    Pipe({
        name: "safeStyleUrl"
    })
], SafeStyleUrlPipe);

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
        declarations: [SafeHtmlPipe, SafeUrlPipe, SafeStylePipe, SafeStyleUrlPipe],
        exports: [SafeHtmlPipe, SafeUrlPipe, SafeStylePipe, SafeStyleUrlPipe]
    })
], DomSanitizerModule);

/**
 * Generated bundle index. Do not edit.
 */

export { DomSanitizerModule, SafeHtmlPipe as ɵa, SafeUrlPipe as ɵb, SafeStylePipe as ɵc, SafeStyleUrlPipe as ɵd };
//# sourceMappingURL=commons-angular-extensions-dom-sanitizer.js.map
