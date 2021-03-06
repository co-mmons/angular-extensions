import { NgModule } from "@angular/core";
import { SafeHtmlPipe } from "./safe-html-pipe";
import { SafeStylePipe } from "./safe-style-pipe";
import { SafeStyleUrlPipe } from "./safe-style-url-pipe";
import { SafeUrlPipe } from "./safe-url-pipe";
export class DomSanitizerModule {
}
DomSanitizerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SafeHtmlPipe, SafeUrlPipe, SafeStylePipe, SafeStyleUrlPipe],
                exports: [SafeHtmlPipe, SafeUrlPipe, SafeStylePipe, SafeStyleUrlPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZG9tLXNhbml0aXplci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUM5QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBTTVDLE1BQU0sT0FBTyxrQkFBa0I7OztZQUo5QixRQUFRLFNBQUM7Z0JBQ04sWUFBWSxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLENBQUM7Z0JBQzFFLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixDQUFDO2FBQ3hFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7U2FmZUh0bWxQaXBlfSBmcm9tIFwiLi9zYWZlLWh0bWwtcGlwZVwiO1xuaW1wb3J0IHtTYWZlU3R5bGVQaXBlfSBmcm9tIFwiLi9zYWZlLXN0eWxlLXBpcGVcIjtcbmltcG9ydCB7U2FmZVN0eWxlVXJsUGlwZX0gZnJvbSBcIi4vc2FmZS1zdHlsZS11cmwtcGlwZVwiO1xuaW1wb3J0IHtTYWZlVXJsUGlwZX0gZnJvbSBcIi4vc2FmZS11cmwtcGlwZVwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1NhZmVIdG1sUGlwZSwgU2FmZVVybFBpcGUsIFNhZmVTdHlsZVBpcGUsIFNhZmVTdHlsZVVybFBpcGVdLFxuICAgIGV4cG9ydHM6IFtTYWZlSHRtbFBpcGUsIFNhZmVVcmxQaXBlLCBTYWZlU3R5bGVQaXBlLCBTYWZlU3R5bGVVcmxQaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBEb21TYW5pdGl6ZXJNb2R1bGUge1xufVxuIl19