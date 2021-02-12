import { NgModule } from "@angular/core";

import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatMenuModule } from "@angular/material/menu";
import { MatTableModule } from "@angular/material/table";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatTooltipModule } from "@angular/material/tooltip";

import { DragDropModule } from "@angular/cdk/drag-drop";

@NgModule({
  declarations: [],
  imports: [],
  exports: [
    MatListModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatCheckboxModule,
    MatTableModule,
    MatGridListModule,
    DragDropModule,
    MatExpansionModule,
    MatTooltipModule
  ],
})
export class MaterialModule {}
