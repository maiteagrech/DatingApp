import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { IMember} from "src/app/models/member";
import { MemberService } from "src/core/users/member.service";

@Component({
  selector: "app-members",
  templateUrl: "./members.component.html",
  styleUrls: ["./members.component.css"],
})
export class MembersComponent implements OnInit {

  constructor(private memberService: MemberService) {}

  members: IMember[];
  displayedColumns: string[] = ['username', 'city', 'age'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  dataSource: MatTableDataSource<IMember>;

  ngOnInit() {
    this.loadMembers();
    this.dataSource = new MatTableDataSource(this.members);
  }

  loadMembers() {
    this.memberService  
      .getMembers()
      .subscribe((membersFromService) => { 
        this.members = membersFromService;
      });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}