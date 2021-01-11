import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../material/material.module";
import { ContentRoutes } from "./content.routing";
import { ListsComponent } from "./lists/lists.component";
import { MembersComponent } from "./members/members/members.component";
import { MessagesComponent } from "./messages/messages.component";

@NgModule({
  declarations: [MembersComponent, ListsComponent, MessagesComponent],
  imports: [RouterModule.forChild(ContentRoutes), MaterialModule, CommonModule],
})
export class ContentModule {}
