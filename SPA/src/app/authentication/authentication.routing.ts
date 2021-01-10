import { Routes } from "@angular/router";
import { Error404Component } from "./error/404/error-404.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

export const AuthenticationRoutes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path: "404",
    component: Error404Component,
  },
];
