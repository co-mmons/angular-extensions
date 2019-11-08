import {NgModule} from "@angular/core";
import {ElementRefExport} from "./element-ref-export";

export {ElementRefExport} from "./element-ref-export";

@NgModule({
    declarations: [ElementRefExport],
    exports: [ElementRefExport]
})
export class CoreExtensionsModule {
}
