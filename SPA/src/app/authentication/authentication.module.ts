import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../material/material.module";
import { AuthenticationRoutes } from "./authentication.routing";
import { Error404Component } from "./error/404/error-404.component";
import { Error500Component } from "./error/500/error-500.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

@NgModule({
  declarations: [LoginComponent, RegisterComponent, Error404Component, Error500Component],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CommonModule,
    RouterModule.forChild(AuthenticationRoutes),
  ],
})
export class AuthenticationModule {}
