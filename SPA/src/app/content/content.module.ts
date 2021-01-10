import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../material/material.module";
import { ContentRoutes } from "./content.routing";
import { ListsComponent } from "./lists/lists.component";
import { MatchesComponent } from "./matches/matches.component";
import { MessagesComponent } from "./messages/messages.component";
import { UsersComponent } from "./users/users.component";

@NgModule({
    declarations: [UsersComponent, MatchesComponent, ListsComponent, MessagesComponent],
    imports: [RouterModule.forChild(ContentRoutes), MaterialModule, CommonModule],
})
export class ContentModule {}