import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {SafeHtmlPipe} from "./safe-html-pipe";
import {SafeUrlPipe} from "./safe-url-pipe";

@NgModule({
    imports: [BrowserModule],
    declarations: [SafeHtmlPipe, SafeUrlPipe],
    exports: [SafeHtmlPipe, SafeUrlPipe, BrowserModule]
})
export class DomSanitizerModule {
}