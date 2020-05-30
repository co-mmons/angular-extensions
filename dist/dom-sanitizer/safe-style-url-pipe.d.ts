import { PipeTransform } from "@angular/core";
import { DomSanitizer, SafeStyle } from "@angular/platform-browser";
export declare class SafeStyleUrlPipe implements PipeTransform {
    private sanitizer;
    constructor(sanitizer: DomSanitizer);
    transform(url: string): SafeStyle;
}
