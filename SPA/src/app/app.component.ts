import { HttpClient } from "@angular/common/http";
import { Component, OnInit, Output, resolveForwardRef } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { AccountService } from "./authentication/_services/account.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {

  constructor(private accountService: AccountService) {}

  // jwtHelper = new JwtHelperService();
  title = "DatingApp";
  
  ngOnInit() {
  //   const token = localStorage.getItem('token');
  //   if(token) {
  //     this.accountService.decodedToken = this.jwtHelper.decodeToken(token);
  //   }
  }
}
