import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-error500',
  templateUrl: './error-500.component.html',
  styleUrls: ['./error-500.component.css']  
})
export class Error500Component {

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.error = navigation?.extras?.state?.error;
  }
  error: any;

}