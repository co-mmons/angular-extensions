import * as tslib_1 from "tslib";
import { Pipe, Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";
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
    MatchMediaPipe = tslib_1.__decorate([
        Pipe({
            name: "matchMedia",
            pure: false
        })
    ], MatchMediaPipe);
    return MatchMediaPipe;
}());
export { MatchMediaPipe };
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
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], IfMatchMediaDirective.prototype, "ifMatchMedia", null);
    IfMatchMediaDirective = tslib_1.__decorate([
        Directive({
            selector: "[ifMatchMedia]"
        }),
        tslib_1.__metadata("design:paramtypes", [TemplateRef, ViewContainerRef])
    ], IfMatchMediaDirective);
    return IfMatchMediaDirective;
}());
export { IfMatchMediaDirective };
//# sourceMappingURL=match-media.js.map