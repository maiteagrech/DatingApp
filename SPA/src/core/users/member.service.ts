import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IMember } from "src/app/models/member";
import { environment } from "src/environments/environment";

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + localStorage.getItem('token')
  })
}

@Injectable({
  providedIn: "root",
})
export class MemberService {

  constructor(private http: HttpClient) {}

  baseUrl = environment.apiUrl;

  getMembers() {
    return this.http.get<IMember[]>(this.baseUrl + 'users', httpOptions);
  }

  getMember(username: string) {
    return this.http.get<IMember>(this.baseUrl + 'users/' + username, httpOptions);
  }

}
 