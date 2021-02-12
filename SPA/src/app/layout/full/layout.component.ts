import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/core/auth/account.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent { 

  constructor(private accountService: AccountService, private router: Router) { }
  
  signOut() {
    this.accountService.logOut();
    this.router.navigate(["/authentication/login"]);
  }
}
