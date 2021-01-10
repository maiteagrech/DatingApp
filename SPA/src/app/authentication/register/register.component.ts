import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../_services/account.service';
import { CustomValidators } from 'ngx-custom-validators';

const username = new FormControl('', Validators.required);
const password = new FormControl('', Validators.required);
const confirmPassword = new FormControl('', CustomValidators.equalTo(password));

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html', 
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router, private authService: AccountService) {}

  msg = '';
  passwordHide = true;
  confirmPasswordHide = true;
  public registerForm: FormGroup;
 
  ngOnInit() {
    this.registerForm = this.fb.group({
      username: username,
      password: password,
      confirmPassword: confirmPassword
    });

  }
  onSubmit() {
    var model = {
      username: this.registerForm.get('username').value,
      Password: this.registerForm.controls["password"].value
    }
    this.authService.register(model).subscribe(() => {
      this.router.navigate(['/']);
    }, error => {
      this.msg = error.error;
    });
  }  
}
 