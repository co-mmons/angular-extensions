import * as tslib_1 from "tslib";
import { Pipe, Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";
import { ScreenSizeMinWidth } from "./screen-size";
import { MatchMediaPipe } from "./match-media";
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
MatchWidthGreaterPipe = tslib_1.__decorate([
    Pipe({
        name: "matchGreaterWidth",
        pure: false
    })
], MatchWidthGreaterPipe);
export { MatchWidthGreaterPipe };
let MatchLesserWidthPipe = class MatchLesserWidthPipe extends MatchMediaPipe {
    prepareQuery(query) {
        return buildMediaQuery("lte", query);
    }
};
MatchLesserWidthPipe = tslib_1.__decorate([
    Pipe({
        name: "matchLesserWidth",
        pure: false
    })
], MatchLesserWidthPipe);
export { MatchLesserWidthPipe };
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
export { IfMatchGreaterWidthDirective };
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
export { IfMatchLesserWidthDirective };
//# sourceMappingURL=match-width.js.map