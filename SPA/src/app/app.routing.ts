import { Routes } from "@angular/router";
import { AuthGuard } from "./auth.guard";
import { BlankComponent } from "./layout/blank/blank.component";
import { LayoutComponent } from "./layout/full/layout.component";

export const AppRoutes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        redirectTo: '/authentication/login',
        pathMatch: 'full'
      }, 
      {
        path: 'content',
        redirectTo: '/content/members',
        pathMatch: 'full'
      },       
      {
        path: "content",
        loadChildren: () =>
          import("./content/content.module").then(
            (m) => m.ContentModule
          ),
      },
    ],
  },
  {
    path: "",
    component: BlankComponent,
    children: [
      {
        path: "authentication",
        loadChildren: () =>
          import("./authentication/authentication.module").then(
            (m) => m.AuthenticationModule
          ),
      }, 
    ],
  },
  { path: "**", redirectTo: "/authentication/404" },
];
