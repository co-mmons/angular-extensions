import { Pipe, NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

class SafeHtmlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(key) {
        return this.sanitizer.bypassSecurityTrustHtml(key);
    }
}
SafeHtmlPipe.decorators = [
    { type: Pipe, args: [{
                name: "safeHtml"
            },] }
];
SafeHtmlPipe.ctorParameters = () => [
    { type: DomSanitizer }
];

class SafeStylePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(style) {
        return this.sanitizer.bypassSecurityTrustStyle(style);
    }
}
SafeStylePipe.decorators = [
    { type: Pipe, args: [{
                name: "safeStyle"
            },] }
];
SafeStylePipe.ctorParameters = () => [
    { type: DomSanitizer }
];

class SafeStyleUrlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustStyle(`url(${url})`);
    }
}
SafeStyleUrlPipe.decorators = [
    { type: Pipe, args: [{
                name: "safeStyleUrl"
            },] }
];
SafeStyleUrlPipe.ctorParameters = () => [
    { type: DomSanitizer }
];

class SafeUrlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustUrl(url);
    }
}
SafeUrlPipe.decorators = [
    { type: Pipe, args: [{
                name: "safeUrl"
            },] }
];
SafeUrlPipe.ctorParameters = () => [
    { type: DomSanitizer }
];

class DomSanitizerModule {
}
DomSanitizerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SafeHtmlPipe, SafeUrlPipe, SafeStylePipe, SafeStyleUrlPipe],
                exports: [SafeHtmlPipe, SafeUrlPipe, SafeStylePipe, SafeStyleUrlPipe]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { DomSanitizerModule, SafeHtmlPipe as ɵa, SafeUrlPipe as ɵb, SafeStylePipe as ɵc, SafeStyleUrlPipe as ɵd };
//# sourceMappingURL=commons-angular-extensions-dom-sanitizer.js.map
