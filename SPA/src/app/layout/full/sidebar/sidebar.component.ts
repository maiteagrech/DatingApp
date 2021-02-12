import { Component, OnInit } from "@angular/core";
import { AccountService } from "src/core/auth/account.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SideBarComponent implements OnInit {
  constructor() {}

  username: string = "";

  ngOnInit() {
    this.username = localStorage.getItem("username");
  }
}
