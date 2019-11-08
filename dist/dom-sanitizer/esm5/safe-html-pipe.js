import * as tslib_1 from "tslib";
import { Pipe } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
var SafeHtmlPipe = /** @class */ (function () {
    function SafeHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeHtmlPipe.prototype.transform = function (key) {
        return this.sanitizer.bypassSecurityTrustHtml(key);
    };
    SafeHtmlPipe.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    SafeHtmlPipe = tslib_1.__decorate([
        Pipe({
            name: "safeHtml"
        })
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());
export { SafeHtmlPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FmZS1odG1sLXBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY28ubW1vbnMvYW5ndWxhci1leHRlbnNpb25zL2RvbS1zYW5pdGl6ZXIvIiwic291cmNlcyI6WyJzYWZlLWh0bWwtcGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLElBQUksRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFDLFlBQVksRUFBRSxRQUFRLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUtqRTtJQUVJLHNCQUFvQixTQUF1QjtRQUF2QixjQUFTLEdBQVQsU0FBUyxDQUFjO0lBQzNDLENBQUM7SUFFRCxnQ0FBUyxHQUFULFVBQVUsR0FBVztRQUNqQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7Z0JBTDhCLFlBQVk7O0lBRmxDLFlBQVk7UUFIeEIsSUFBSSxDQUFDO1lBQ0YsSUFBSSxFQUFFLFVBQVU7U0FDbkIsQ0FBQztPQUNXLFlBQVksQ0FReEI7SUFBRCxtQkFBQztDQUFBLEFBUkQsSUFRQztTQVJZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BpcGUsIFBpcGVUcmFuc2Zvcm19IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0RvbVNhbml0aXplciwgU2FmZUh0bWx9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XG5cbkBQaXBlKHtcbiAgICBuYW1lOiBcInNhZmVIdG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgU2FmZUh0bWxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7XG4gICAgfVxuXG4gICAgdHJhbnNmb3JtKGtleTogc3RyaW5nKTogU2FmZUh0bWwge1xuICAgICAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoa2V5KTtcbiAgICB9XG59Il19