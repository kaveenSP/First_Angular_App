import { NgModule } from "@angular/core";
import { CapitalizePipe } from "./capitalized.pipe";

@NgModule ({
    declarations: [CapitalizePipe],
    exports: [CapitalizePipe]
})

export class SharedModule {}