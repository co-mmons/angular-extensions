import { TemplateRef, ViewContainerRef } from "@angular/core";
import { MatchMediaPipe } from "./match-media";
export declare class MatchWidthGreaterPipe extends MatchMediaPipe {
    protected prepareQuery(query: string): string;
}
export declare class MatchLesserWidthPipe extends MatchMediaPipe {
    protected prepareQuery(query: string): string;
}
export declare class IfMatchGreaterWidthDirective {
    private template;
    private viewContainer;
    constructor(template: TemplateRef<any>, viewContainer: ViewContainerRef);
    ifMatchGreaterWidth: string;
}
export declare class IfMatchLesserWidthDirective {
    private template;
    private viewContainer;
    constructor(template: TemplateRef<any>, viewContainer: ViewContainerRef);
    ifMatchLesserWidth: string;
}
