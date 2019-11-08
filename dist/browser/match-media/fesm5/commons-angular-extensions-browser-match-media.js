import { __decorate, __extends } from 'tslib';
import { Pipe, TemplateRef, ViewContainerRef, Input, Directive, NgModule } from '@angular/core';

var MatchMediaPipe = /** @class */ (function () {
    function MatchMediaPipe() {
    }
    MatchMediaPipe.prototype.transform = function (query) {
        if (query != this.query) {
            this.destroy();
            this.queryList = window.matchMedia(this.prepareQuery(query));
        }
        return this.queryList.matches;
    };
    MatchMediaPipe.prototype.prepareQuery = function (inputQuery) {
        return inputQuery;
    };
    MatchMediaPipe.prototype.destroy = function () {
        this.queryList = null;
    };
    MatchMediaPipe.prototype.ngOnDestroy = function () {
        this.destroy;
    };
    MatchMediaPipe = __decorate([
        Pipe({
            name: "matchMedia",
            pure: false
        })
    ], MatchMediaPipe);
    return MatchMediaPipe;
}());
var IfMatchMediaDirective = /** @class */ (function () {
    function IfMatchMediaDirective(template, viewContainer) {
        this.template = template;
        this.viewContainer = viewContainer;
    }
    Object.defineProperty(IfMatchMediaDirective.prototype, "ifMatchMedia", {
        set: function (query) {
            var matches = window.matchMedia(query).matches;
            if (matches) {
                this.viewContainer.createEmbeddedView(this.template);
            }
            else if (!matches) {
                this.viewContainer.clear();
            }
        },
        enumerable: true,
        configurable: true
    });
    IfMatchMediaDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: ViewContainerRef }
    ]; };
    __decorate([
        Input()
    ], IfMatchMediaDirective.prototype, "ifMatchMedia", null);
    IfMatchMediaDirective = __decorate([
        Directive({
            selector: "[ifMatchMedia]"
        })
    ], IfMatchMediaDirective);
    return IfMatchMediaDirective;
}());

var ScreenSizeMinWidth = /** @class */ (function () {
    function ScreenSizeMinWidth() {
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
    return ScreenSizeMinWidth;
}());

function buildMediaQuery(comparison, input) {
    var size = input;
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
    return "(" + (comparison == "gte" ? "min-width" : "max-width") + ": " + size + "px)";
}
var MatchWidthGreaterPipe = /** @class */ (function (_super) {
    __extends(MatchWidthGreaterPipe, _super);
    function MatchWidthGreaterPipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatchWidthGreaterPipe.prototype.prepareQuery = function (query) {
        return buildMediaQuery("gte", query);
    };
    MatchWidthGreaterPipe = __decorate([
        Pipe({
            name: "matchGreaterWidth",
            pure: false
        })
    ], MatchWidthGreaterPipe);
    return MatchWidthGreaterPipe;
}(MatchMediaPipe));
var MatchLesserWidthPipe = /** @class */ (function (_super) {
    __extends(MatchLesserWidthPipe, _super);
    function MatchLesserWidthPipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatchLesserWidthPipe.prototype.prepareQuery = function (query) {
        return buildMediaQuery("lte", query);
    };
    MatchLesserWidthPipe = __decorate([
        Pipe({
            name: "matchLesserWidth",
            pure: false
        })
    ], MatchLesserWidthPipe);
    return MatchLesserWidthPipe;
}(MatchMediaPipe));
var IfMatchGreaterWidthDirective = /** @class */ (function () {
    function IfMatchGreaterWidthDirective(template, viewContainer) {
        this.template = template;
        this.viewContainer = viewContainer;
    }
    Object.defineProperty(IfMatchGreaterWidthDirective.prototype, "ifMatchGreaterWidth", {
        set: function (minWidth) {
            var matches = window.matchMedia(buildMediaQuery("gte", minWidth)).matches;
            if (matches) {
                this.viewContainer.createEmbeddedView(this.template);
            }
            else if (!matches) {
                this.viewContainer.clear();
            }
        },
        enumerable: true,
        configurable: true
    });
    IfMatchGreaterWidthDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: ViewContainerRef }
    ]; };
    __decorate([
        Input()
    ], IfMatchGreaterWidthDirective.prototype, "ifMatchGreaterWidth", null);
    IfMatchGreaterWidthDirective = __decorate([
        Directive({
            selector: "[ifMatchGreaterWidth]"
        })
    ], IfMatchGreaterWidthDirective);
    return IfMatchGreaterWidthDirective;
}());
var IfMatchLesserWidthDirective = /** @class */ (function () {
    function IfMatchLesserWidthDirective(template, viewContainer) {
        this.template = template;
        this.viewContainer = viewContainer;
    }
    Object.defineProperty(IfMatchLesserWidthDirective.prototype, "ifMatchLesserWidth", {
        set: function (maxWidth) {
            var matches = window.matchMedia(buildMediaQuery("lte", maxWidth)).matches;
            if (matches) {
                this.viewContainer.createEmbeddedView(this.template);
            }
            else if (!matches) {
                this.viewContainer.clear();
            }
        },
        enumerable: true,
        configurable: true
    });
    IfMatchLesserWidthDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: ViewContainerRef }
    ]; };
    __decorate([
        Input()
    ], IfMatchLesserWidthDirective.prototype, "ifMatchLesserWidth", null);
    IfMatchLesserWidthDirective = __decorate([
        Directive({
            selector: "[ifMatchLesserWidth]"
        })
    ], IfMatchLesserWidthDirective);
    return IfMatchLesserWidthDirective;
}());

var MatchMediaModule = /** @class */ (function () {
    function MatchMediaModule() {
    }
    MatchMediaModule = __decorate([
        NgModule({
            declarations: [MatchMediaPipe, IfMatchMediaDirective, MatchWidthGreaterPipe, MatchLesserWidthPipe, IfMatchGreaterWidthDirective, IfMatchLesserWidthDirective],
            exports: [MatchMediaPipe, IfMatchMediaDirective, MatchWidthGreaterPipe, MatchLesserWidthPipe, IfMatchGreaterWidthDirective, IfMatchLesserWidthDirective]
        })
    ], MatchMediaModule);
    return MatchMediaModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { IfMatchGreaterWidthDirective, IfMatchLesserWidthDirective, IfMatchMediaDirective, MatchLesserWidthPipe, MatchMediaModule, MatchMediaPipe, MatchWidthGreaterPipe };
//# sourceMappingURL=commons-angular-extensions-browser-match-media.js.map
