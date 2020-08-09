import { Pipe, Directive, TemplateRef, ViewContainerRef, Input, NgModule } from '@angular/core';

class MatchMediaPipe {
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
}
MatchMediaPipe.decorators = [
    { type: Pipe, args: [{
                name: "matchMedia",
                pure: false
            },] }
];
class IfMatchMediaDirective {
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
}
IfMatchMediaDirective.decorators = [
    { type: Directive, args: [{
                selector: "[ifMatchMedia]"
            },] }
];
IfMatchMediaDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef }
];
IfMatchMediaDirective.propDecorators = {
    ifMatchMedia: [{ type: Input }]
};

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
class MatchWidthGreaterPipe extends MatchMediaPipe {
    prepareQuery(query) {
        return buildMediaQuery("gte", query);
    }
}
MatchWidthGreaterPipe.decorators = [
    { type: Pipe, args: [{
                name: "matchGreaterWidth",
                pure: false
            },] }
];
class MatchLesserWidthPipe extends MatchMediaPipe {
    prepareQuery(query) {
        return buildMediaQuery("lte", query);
    }
}
MatchLesserWidthPipe.decorators = [
    { type: Pipe, args: [{
                name: "matchLesserWidth",
                pure: false
            },] }
];
class IfMatchGreaterWidthDirective {
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
}
IfMatchGreaterWidthDirective.decorators = [
    { type: Directive, args: [{
                selector: "[ifMatchGreaterWidth]"
            },] }
];
IfMatchGreaterWidthDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef }
];
IfMatchGreaterWidthDirective.propDecorators = {
    ifMatchGreaterWidth: [{ type: Input }]
};
class IfMatchLesserWidthDirective {
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
}
IfMatchLesserWidthDirective.decorators = [
    { type: Directive, args: [{
                selector: "[ifMatchLesserWidth]"
            },] }
];
IfMatchLesserWidthDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef }
];
IfMatchLesserWidthDirective.propDecorators = {
    ifMatchLesserWidth: [{ type: Input }]
};

class MatchMediaModule {
}
MatchMediaModule.decorators = [
    { type: NgModule, args: [{
                declarations: [MatchMediaPipe, IfMatchMediaDirective, MatchWidthGreaterPipe, MatchLesserWidthPipe, IfMatchGreaterWidthDirective, IfMatchLesserWidthDirective],
                exports: [MatchMediaPipe, IfMatchMediaDirective, MatchWidthGreaterPipe, MatchLesserWidthPipe, IfMatchGreaterWidthDirective, IfMatchLesserWidthDirective]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { IfMatchGreaterWidthDirective, IfMatchLesserWidthDirective, IfMatchMediaDirective, MatchLesserWidthPipe, MatchMediaModule, MatchMediaPipe, MatchWidthGreaterPipe };
//# sourceMappingURL=commons-angular-extensions-browser-match-media.js.map
