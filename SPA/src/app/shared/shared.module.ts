import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TestErrorsComponent } from './errors/test-errors.component';
import { MaterialModule } from "../material/material.module";

@NgModule({
    declarations: [TestErrorsComponent],
    imports: [CommonModule, MaterialModule],
    exports: [TestErrorsComponent]
})
export class SharedModule {

}