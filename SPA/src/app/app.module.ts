import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { LayoutComponent } from "./layout/full/layout.component";
import { SideBarComponent } from "./layout/full/sidebar/sidebar.component";
import { MaterialModule } from "./material/material.module";
import { RouterModule } from "@angular/router";
import { AppRoutes } from "./app.routing";
import { AuthenticationModule } from "./authentication/authentication.module";
import { BlankComponent } from "./layout/blank/blank.component";
import { ContentModule } from "./content/content.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { JwtModule } from "@auth0/angular-jwt";
import { SharedModule } from "./shared/shared.module";

export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SideBarComponent,
    BlankComponent,
  ],
  imports: [
    HttpClientModule,
    MaterialModule,
    RouterModule.forRoot(AppRoutes),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:5000"],
        disallowedRoutes: ["http://localhost:5000/api/account/login"],
      },
    }),
    AuthenticationModule,
    ContentModule,
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
