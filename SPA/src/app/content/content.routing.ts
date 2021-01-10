import { Routes } from "@angular/router";
import { AuthGuard } from "../auth.guard";
import { ListsComponent } from "./lists/lists.component";
import { MatchesComponent } from "./matches/matches.component";
import { MessagesComponent } from "./messages/messages.component";

export const ContentRoutes: Routes = [
  {
    path: "matches",
    component: MatchesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "lists",
    component: ListsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "messages",
    component: MessagesComponent,
    canActivate: [AuthGuard],
  }
];
