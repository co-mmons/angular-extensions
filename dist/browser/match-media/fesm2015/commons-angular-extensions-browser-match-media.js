import { __decorate } from 'tslib';
import { Pipe, TemplateRef, ViewContainerRef, Input, Directive, NgModule } from '@angular/core';

let MatchMediaPipe = class MatchMediaPipe {
    transform(query) {
        if (query != this.query) {
            this.destroy();
            this.queryList = window.matchMedia(this.prepareQuery(query));
        }
        return this.queryList.matches;
    }
    prepareQuery(inputQuery) {
        return inputQuery;
    }
    destroy() {
        this.queryList = null;
    }
    ngOnDestroy() {
        this.destroy;
    }
};
MatchMediaPipe = __decorate([
    Pipe({
        name: "matchMedia",
        pure: false
    })
], MatchMediaPipe);
let IfMatchMediaDirective = class IfMatchMediaDirective {
    constructor(template, viewContainer) {
        this.template = template;
        this.viewContainer = viewContainer;
    }
    set ifMatchMedia(query) {
        let matches = window.matchMedia(query).matches;
        if (matches) {
            this.viewContainer.createEmbeddedView(this.template);
        }
        else if (!matches) {
            this.viewContainer.clear();
        }
    }
};
IfMatchMediaDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef }
];
__decorate([
    Input()
], IfMatchMediaDirective.prototype, "ifMatchMedia", null);
IfMatchMediaDirective = __decorate([
    Directive({
        selector: "[ifMatchMedia]"
    })
], IfMatchMediaDirective);

class ScreenSizeMinWidth {
}
ScreenSizeMinWidth.xs = 0;
ScreenSizeMinWidth.extraSmall = ScreenSizeMinWidth.xs;
ScreenSizeMinWidth.sm = 576;
ScreenSizeMinWidth.small = ScreenSizeMinWidth.sm;
ScreenSizeMinWidth.md = 768;
ScreenSizeMinWidth.tablet = ScreenSizeMinWidth.md;
ScreenSizeMinWidth.medium = ScreenSizeMinWidth.md;
ScreenSizeMinWidth.lg = 992;
ScreenSizeMinWidth.large = ScreenSizeMinWidth.lg;
ScreenSizeMinWidth.desktop = ScreenSizeMinWidth.lg;
ScreenSizeMinWidth.xl = 1200;
ScreenSizeMinWidth.extraLarge = ScreenSizeMinWidth.xl;
ScreenSizeMinWidth.desktopWide = ScreenSizeMinWidth.xl;

function buildMediaQuery(comparison, input) {
    let size = input;
    // when predefined size is given
    if (input.match(/^\D+$/)) {
        size = ScreenSizeMinWidth[input];
        if (size === undefined) {
            throw new Error("Cannot find predefined screen size for key " + input);
        }
        if (comparison == "lte") {
            size = size - 1;
        }
    }
    return `(${comparison == "gte" ? "min-width" : "max-width"}: ${size}px)`;
}
let MatchWidthGreaterPipe = class MatchWidthGreaterPipe extends MatchMediaPipe {
    prepareQuery(query) {
        return buildMediaQuery("gte", query);
    }
};
MatchWidthGreaterPipe = __decorate([
    Pipe({
        name: "matchGreaterWidth",
        pure: false
    })
], MatchWidthGreaterPipe);
let MatchLesserWidthPipe = class MatchLesserWidthPipe extends MatchMediaPipe {
    prepareQuery(query) {
        return buildMediaQuery("lte", query);
    }
};
MatchLesserWidthPipe = __decorate([
    Pipe({
        name: "matchLesserWidth",
        pure: false
    })
], MatchLesserWidthPipe);
let IfMatchGreaterWidthDirective = class IfMatchGreaterWidthDirective {
    constructor(template, viewContainer) {
        this.template = template;
        this.viewContainer = viewContainer;
    }
    set ifMatchGreaterWidth(minWidth) {
        let matches = window.matchMedia(buildMediaQuery("gte", minWidth)).matches;
        if (matches) {
            this.viewContainer.createEmbeddedView(this.template);
        }
        else if (!matches) {
            this.viewContainer.clear();
        }
    }
};
IfMatchGreaterWidthDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef }
];
__decorate([
    Input()
], IfMatchGreaterWidthDirective.prototype, "ifMatchGreaterWidth", null);
IfMatchGreaterWidthDirective = __decorate([
    Directive({
        selector: "[ifMatchGreaterWidth]"
    })
], IfMatchGreaterWidthDirective);
let IfMatchLesserWidthDirective = class IfMatchLesserWidthDirective {
    constructor(template, viewContainer) {
        this.template = template;
        this.viewContainer = viewContainer;
    }
    set ifMatchLesserWidth(maxWidth) {
        let matches = window.matchMedia(buildMediaQuery("lte", maxWidth)).matches;
        if (matches) {
            this.viewContainer.createEmbeddedView(this.template);
        }
        else if (!matches) {
            this.viewContainer.clear();
        }
    }
};
IfMatchLesserWidthDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef }
];
__decorate([
    Input()
], IfMatchLesserWidthDirective.prototype, "ifMatchLesserWidth", null);
IfMatchLesserWidthDirective = __decorate([
    Directive({
        selector: "[ifMatchLesserWidth]"
    })
], IfMatchLesserWidthDirective);

let MatchMediaModule = class MatchMediaModule {
};
MatchMediaModule = __decorate([
    NgModule({
        declarations: [MatchMediaPipe, IfMatchMediaDirective, MatchWidthGreaterPipe, MatchLesserWidthPipe, IfMatchGreaterWidthDirective, IfMatchLesserWidthDirective],
        exports: [MatchMediaPipe, IfMatchMediaDirective, MatchWidthGreaterPipe, MatchLesserWidthPipe, IfMatchGreaterWidthDirective, IfMatchLesserWidthDirective]
    })
], MatchMediaModule);

/**
 * Generated bundle index. Do not edit.
 */

export { IfMatchGreaterWidthDirective, IfMatchLesserWidthDirective, IfMatchMediaDirective, MatchLesserWidthPipe, MatchMediaModule, MatchMediaPipe, MatchWidthGreaterPipe };
//# sourceMappingURL=commons-angular-extensions-browser-match-media.js.map
