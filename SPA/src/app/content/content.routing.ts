import { Routes } from "@angular/router";
import { AuthGuard } from "../auth.guard";
import { LayoutComponent } from "../layout/full/layout.component";
import { ListsComponent } from "./lists/lists.component";
import { MembersComponent } from "./members/members/members.component";
import { MessagesComponent } from "./messages/messages.component";

export const ContentRoutes: Routes = [
  {
    path: "content",
    runGuardsAndResolvers: "always",
    canActivate: [AuthGuard],
    component: LayoutComponent,
    children: [
      {
        path: "members",
        component: MembersComponent,
      },
      {
        path: "lists",
        component: ListsComponent,
      },
      {
        path: "messages",
        component: MessagesComponent,
      },
    ], 
  },
];
