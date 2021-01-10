import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { User } from "src/app/models/user";
import { ReplaySubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AccountService {

  constructor(private http: HttpClient) {}

  // private currentUserSource = new ReplaySubject<User>(1);
  // currentUser$ = this.currentUserSource.asObservable();

  baseUrl: string = "http://localhost:5000/api/account/";
  redirectUrl: string;
  
  login(model: any) {
    localStorage.setItem("username", model.username);
    return this.http.post(this.baseUrl + "login", model).pipe(
      map((response: User) => {
        const user = response;
        if (user) {
          localStorage.setItem("token", user.token);
          // this.currentUserSource.next(user);
        }
      })
    );
  }

  register(model: any) {
    return this.http.post(this.baseUrl + "register", model);
  }

  logOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    // this.currentUserSource.next(null);
  }
}
// jwtHelper = new JwtHelperService();
// this.router.navigate(['/authentication/login']);
// loggedIn() {
//   const token = localStorage.getItem('token');
//   return !this.jwtHelper.isTokenExpired(token);
// }
// this.decodedToken = this.jwtHelper.decodeToken(user.token);
// console.log(this.decodedToken);
// decodedToken: any;
