import {Pipe, PipeTransform, Directive, TemplateRef, ViewContainerRef, Input} from "@angular/core";

@Pipe({
    name: "matchMedia",
    pure: false
})
export class MatchMediaPipe implements PipeTransform {

    transform(query: string): boolean {

        if (query != this.query) {
            this.destroy();
            this.queryList = window.matchMedia(this.prepareQuery(query));
        }

        return this.queryList.matches;
    }

    protected prepareQuery(inputQuery: string) {
        return inputQuery;
    }

    private queryList: MediaQueryList;

    private query: string;

    private destroy() {
        this.queryList = null;
    }

    ngOnDestroy() {
        this.destroy;
    }

}

@Directive({
    selector: "[ifMatchMedia]"
})
export class IfMatchMediaDirective {

    constructor(private template: TemplateRef<any>, private viewContainer: ViewContainerRef) {
    }

    @Input()
    set ifMatchMedia(query: string) {

        let matches = window.matchMedia(query).matches;

        if (matches) {
            this.viewContainer.createEmbeddedView(this.template);
        } else if (!matches) {
            this.viewContainer.clear();
        }
    }
}
