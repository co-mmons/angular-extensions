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
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], IfMatchMediaDirective.prototype, "ifMatchMedia", null);
    IfMatchMediaDirective = __decorate([
        Directive({
            selector: "[ifMatchMedia]"
        }),
        __metadata("design:paramtypes", [TemplateRef, ViewContainerRef])
    ], IfMatchMediaDirective);
    return IfMatchMediaDirective;
}());
export { IfMatchMediaDirective };
//# sourceMappingURL=match-media.js.map