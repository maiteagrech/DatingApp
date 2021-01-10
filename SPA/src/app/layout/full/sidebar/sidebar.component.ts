import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/authentication/_services/account.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SideBarComponent implements OnInit{
    username: string = '';
    constructor(private accountService: AccountService) {}
    onMatches = true;
    ngOnInit() {
        this.username = localStorage.getItem('username');
    }
} 