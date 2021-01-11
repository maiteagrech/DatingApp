import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../material/material.module";
import { ContentRoutes } from "./content.routing";
import { ListsComponent } from "./members/lists/lists.component";
import { MatchesComponent } from "./members/matches/matches.component";
import { MessagesComponent } from "./members/messages/messages.component";

@NgModule({
  declarations: [MatchesComponent, ListsComponent, MessagesComponent],
  imports: [RouterModule.forChild(ContentRoutes), MaterialModule, CommonModule],
})
export class ContentModule {}
