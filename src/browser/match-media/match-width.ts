import {Pipe, PipeTransform, Directive, TemplateRef, ViewContainerRef, Input} from "@angular/core";
import {ScreenSizeMinWidth} from "./screen-size";
import {MatchMediaPipe} from "./match-media";

function buildMediaQuery(comparison: "lte" | "gte", input: string): string {

    let size: any = input;

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

@Pipe({
    name: "matchGreaterWidth",
    pure: false
})
export class MatchWidthGreaterPipe extends MatchMediaPipe {

    protected prepareQuery(query: string) {
        return buildMediaQuery("gte", query);
    }

}

@Pipe({
    name: "matchLesserWidth",
    pure: false
})
export class MatchLesserWidthPipe extends MatchMediaPipe {

    protected prepareQuery(query: string) {
        return buildMediaQuery("lte", query);
    }

}

@Directive({
    selector: "[ifMatchGreaterWidth]"
})
export class IfMatchGreaterWidthDirective {

    constructor(private template: TemplateRef<any>, private viewContainer: ViewContainerRef) {
    }

    @Input()
    set ifMatchGreaterWidth(minWidth: string) {

        let matches = window.matchMedia(buildMediaQuery("gte", minWidth)).matches;

        if (matches) {
            this.viewContainer.createEmbeddedView(this.template);
        } else if (!matches) {
            this.viewContainer.clear();
        }
    }
}

@Directive({
    selector: "[ifMatchLesserWidth]"
})
export class IfMatchLesserWidthDirective {

    constructor(private template: TemplateRef<any>, private viewContainer: ViewContainerRef) {
    }

    @Input()
    set ifMatchLesserWidth(maxWidth: string) {

        let matches = window.matchMedia(buildMediaQuery("lte", maxWidth)).matches;

        if (matches) {
            this.viewContainer.createEmbeddedView(this.template);
        } else if (!matches) {
            this.viewContainer.clear();
        }
    }
}