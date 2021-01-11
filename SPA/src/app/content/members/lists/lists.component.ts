import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  constructor(private http: HttpClient) { }
  users: any;

  ngOnInit() {
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
