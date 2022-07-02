import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users :any[]=[]
  constructor(private global : GlobalService) { }

  ngOnInit(): void {
    this.global.getUsers().subscribe(data=>
      this.users=data.data
      )
  }

}
