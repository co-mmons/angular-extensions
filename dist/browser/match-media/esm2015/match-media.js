import { Pipe, Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";
export class MatchMediaPipe {
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
}
MatchMediaPipe.decorators = [
    { type: Pipe, args: [{
                name: "matchMedia",
                pure: false
            },] }
];
export class IfMatchMediaDirective {
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
}
IfMatchMediaDirective.decorators = [
    { type: Directive, args: [{
                selector: "[ifMatchMedia]"
            },] }
];
IfMatchMediaDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef }
];
IfMatchMediaDirective.propDecorators = {
    ifMatchMedia: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2gtbWVkaWEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYnJvd3Nlci9tYXRjaC1tZWRpYS9tYXRjaC1tZWRpYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsSUFBSSxFQUFpQixTQUFTLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQU1uRyxNQUFNLE9BQU8sY0FBYztJQUV2QixTQUFTLENBQUMsS0FBYTtRQUVuQixJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDaEU7UUFFRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO0lBQ2xDLENBQUM7SUFFUyxZQUFZLENBQUMsVUFBa0I7UUFDckMsT0FBTyxVQUFVLENBQUM7SUFDdEIsQ0FBQztJQU1PLE9BQU87UUFDWCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDO0lBRUQsV0FBVztRQUNQLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7O1lBOUJKLElBQUksU0FBQztnQkFDRixJQUFJLEVBQUUsWUFBWTtnQkFDbEIsSUFBSSxFQUFFLEtBQUs7YUFDZDs7QUFrQ0QsTUFBTSxPQUFPLHFCQUFxQjtJQUU5QixZQUFvQixRQUEwQixFQUFVLGFBQStCO1FBQW5FLGFBQVEsR0FBUixRQUFRLENBQWtCO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWtCO0lBQ3ZGLENBQUM7SUFFRCxJQUNJLFlBQVksQ0FBQyxLQUFhO1FBRTFCLElBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBRS9DLElBQUksT0FBTyxFQUFFO1lBQ1QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDeEQ7YUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDOUI7SUFDTCxDQUFDOzs7WUFsQkosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxnQkFBZ0I7YUFDN0I7OztZQXRDdUMsV0FBVztZQUFFLGdCQUFnQjs7OzJCQTRDaEUsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybSwgRGlyZWN0aXZlLCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiwgSW5wdXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBQaXBlKHtcbiAgICBuYW1lOiBcIm1hdGNoTWVkaWFcIixcbiAgICBwdXJlOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBNYXRjaE1lZGlhUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gICAgdHJhbnNmb3JtKHF1ZXJ5OiBzdHJpbmcpOiBib29sZWFuIHtcblxuICAgICAgICBpZiAocXVlcnkgIT0gdGhpcy5xdWVyeSkge1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLnF1ZXJ5TGlzdCA9IHdpbmRvdy5tYXRjaE1lZGlhKHRoaXMucHJlcGFyZVF1ZXJ5KHF1ZXJ5KSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5xdWVyeUxpc3QubWF0Y2hlcztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcHJlcGFyZVF1ZXJ5KGlucHV0UXVlcnk6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gaW5wdXRRdWVyeTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHF1ZXJ5TGlzdDogTWVkaWFRdWVyeUxpc3Q7XG5cbiAgICBwcml2YXRlIHF1ZXJ5OiBzdHJpbmc7XG5cbiAgICBwcml2YXRlIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMucXVlcnlMaXN0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5kZXN0cm95O1xuICAgIH1cblxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbaWZNYXRjaE1lZGlhXVwiXG59KVxuZXhwb3J0IGNsYXNzIElmTWF0Y2hNZWRpYURpcmVjdGl2ZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+LCBwcml2YXRlIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBpZk1hdGNoTWVkaWEocXVlcnk6IHN0cmluZykge1xuXG4gICAgICAgIGxldCBtYXRjaGVzID0gd2luZG93Lm1hdGNoTWVkaWEocXVlcnkpLm1hdGNoZXM7XG5cbiAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAgIHRoaXMudmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoIW1hdGNoZXMpIHtcbiAgICAgICAgICAgIHRoaXMudmlld0NvbnRhaW5lci5jbGVhcigpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19