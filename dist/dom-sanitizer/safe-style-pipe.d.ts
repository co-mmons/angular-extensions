import { PipeTransform } from "@angular/core";
import { DomSanitizer, SafeStyle } from "@angular/platform-browser";
export declare class SafeStylePipe implements PipeTransform {
    private sanitizer;
    constructor(sanitizer: DomSanitizer);
    transform(style: string): SafeStyle;
}
