import { Component, Input, OnInit } from '@angular/core';
import { IMember } from 'src/app/models/member';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {
  
  constructor() { }

  @Input() member: IMember;

  noPhotoUrl = '../../../../../assets/images/users/no-avatar.png';
  ngOnInit(): void {
  }
}
