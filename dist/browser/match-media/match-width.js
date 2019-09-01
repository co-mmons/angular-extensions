import * as tslib_1 from "tslib";
import { Pipe, Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";
import { ScreenSizeMinWidth } from "./screen-size";
import { MatchMediaPipe } from "./match-media";
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
    tslib_1.__extends(MatchWidthGreaterPipe, _super);
    function MatchWidthGreaterPipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatchWidthGreaterPipe.prototype.prepareQuery = function (query) {
        return buildMediaQuery("gte", query);
    };
    MatchWidthGreaterPipe = tslib_1.__decorate([
        Pipe({
            name: "matchGreaterWidth",
            pure: false
        })
    ], MatchWidthGreaterPipe);
    return MatchWidthGreaterPipe;
}(MatchMediaPipe));
export { MatchWidthGreaterPipe };
var MatchLesserWidthPipe = /** @class */ (function (_super) {
    tslib_1.__extends(MatchLesserWidthPipe, _super);
    function MatchLesserWidthPipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatchLesserWidthPipe.prototype.prepareQuery = function (query) {
        return buildMediaQuery("lte", query);
    };
    MatchLesserWidthPipe = tslib_1.__decorate([
        Pipe({
            name: "matchLesserWidth",
            pure: false
        })
    ], MatchLesserWidthPipe);
    return MatchLesserWidthPipe;
}(MatchMediaPipe));
export { MatchLesserWidthPipe };
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
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], IfMatchGreaterWidthDirective.prototype, "ifMatchGreaterWidth", null);
    IfMatchGreaterWidthDirective = tslib_1.__decorate([
        Directive({
            selector: "[ifMatchGreaterWidth]"
        }),
        tslib_1.__metadata("design:paramtypes", [TemplateRef, ViewContainerRef])
    ], IfMatchGreaterWidthDirective);
    return IfMatchGreaterWidthDirective;
}());
export { IfMatchGreaterWidthDirective };
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
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], IfMatchLesserWidthDirective.prototype, "ifMatchLesserWidth", null);
    IfMatchLesserWidthDirective = tslib_1.__decorate([
        Directive({
            selector: "[ifMatchLesserWidth]"
        }),
        tslib_1.__metadata("design:paramtypes", [TemplateRef, ViewContainerRef])
    ], IfMatchLesserWidthDirective);
    return IfMatchLesserWidthDirective;
}());
export { IfMatchLesserWidthDirective };
//# sourceMappingURL=match-width.js.map