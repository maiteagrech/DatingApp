import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../material/material.module";
import { ContentRoutes } from "./content.routing"
import { MembersComponent } from "./members/members/members.component";
import { MessagesComponent } from "./messages/messages.component";
import { MemberCardComponent } from './members/members/member-card/member-card.component';
import { ReactiveFormsModule } from "@angular/forms";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { ListsComponent } from "./lists/lists.component";

@NgModule({
  declarations: [MembersComponent, MessagesComponent, MemberCardComponent, ListsComponent],
  imports: [RouterModule.forChild(ContentRoutes), MaterialModule, CommonModule, ReactiveFormsModule, PerfectScrollbarModule],
})
export class ContentModule {}
