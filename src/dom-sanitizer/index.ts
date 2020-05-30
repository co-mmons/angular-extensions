import {NgModule} from "@angular/core";
import {SafeHtmlPipe} from "./safe-html-pipe";
import {SafeStylePipe} from "./safe-style-pipe";
import {SafeStyleUrlPipe} from "./safe-style-url-pipe";
import {SafeUrlPipe} from "./safe-url-pipe";

@NgModule({
    declarations: [SafeHtmlPipe, SafeUrlPipe, SafeStylePipe, SafeStyleUrlPipe],
    exports: [SafeHtmlPipe, SafeUrlPipe, SafeStylePipe, SafeStyleUrlPipe]
})
export class DomSanitizerModule {
}
