import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AccountService } from "../_services/account.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder, private router: Router, private acountService: AccountService) {}

  loginForm: FormGroup;
  model: any = {};
  msg = "";
  passwordHide = true;
  ngOnInit() {
    this.loginForm = this.fb.group({
      username: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])],
    });
  }
  onSubmit() {
    this.model = {
      username: this.loginForm.get("username").value,
      password: this.loginForm.get("password").value,
    };
    this.acountService.login(this.model).subscribe(response => {
      console.log(response);
      this.router.navigate(["/content/members"]); 
    }, error => {
      // this.router.navigate(["/authentication/login"]);
      this.msg = error.error;
    });
  } 
}
