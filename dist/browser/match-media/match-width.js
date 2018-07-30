var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
export { MatchWidthGreaterPipe };
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
export { MatchLesserWidthPipe };
var IfMatchGreaterWidthDirective = /** @class */ (function () {
    function IfMatchGreaterWidthDirective(template, viewContainer) {
        this.template = template;
        this.viewContainer = viewContainer;
    }
    Object.defineProperty(IfMatchGreaterWidthDirective.prototype, "cssIfMatchGreaterWidth", {
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
    __decorate([
        Input("cssIfMatchGreaterWidth"),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], IfMatchGreaterWidthDirective.prototype, "cssIfMatchGreaterWidth", null);
    IfMatchGreaterWidthDirective = __decorate([
        Directive({
            selector: "[ifMatchGreaterWidth]"
        }),
        __metadata("design:paramtypes", [TemplateRef, ViewContainerRef])
    ], IfMatchGreaterWidthDirective);
    return IfMatchGreaterWidthDirective;
}());
export { IfMatchGreaterWidthDirective };
var IfMatchLesserWidthDirective = /** @class */ (function () {
    function IfMatchLesserWidthDirective(template, viewContainer) {
        this.template = template;
        this.viewContainer = viewContainer;
    }
    Object.defineProperty(IfMatchLesserWidthDirective.prototype, "cssIfMatchLesserWidth", {
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
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], IfMatchLesserWidthDirective.prototype, "cssIfMatchLesserWidth", null);
    IfMatchLesserWidthDirective = __decorate([
        Directive({
            selector: "[ifMatchLesserWidth]"
        }),
        __metadata("design:paramtypes", [TemplateRef, ViewContainerRef])
    ], IfMatchLesserWidthDirective);
    return IfMatchLesserWidthDirective;
}());
export { IfMatchLesserWidthDirective };
//# sourceMappingURL=match-width.js.map