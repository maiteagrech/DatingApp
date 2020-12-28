import { HttpClient } from "@angular/common/http";
import { Component, OnInit, resolveForwardRef } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  title = "DatingApp";
  users: any;
  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    const url = "http://localhost:5000/api/users";
    this.http.get(url).subscribe(
      (responseData) => {
        this.users = responseData;
        console.log(this.users);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
