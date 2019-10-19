import * as tslib_1 from "tslib";
import { Pipe, Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";
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
MatchMediaPipe = tslib_1.__decorate([
    Pipe({
        name: "matchMedia",
        pure: false
    })
], MatchMediaPipe);
export { MatchMediaPipe };
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
export { IfMatchMediaDirective };
//# sourceMappingURL=match-media.js.map