import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public global:GlobalService) { 
    if(localStorage.getItem("token")) this.global.isLoggin=true
  }

  ngOnInit(): void {
    
  }
  handleLogOut(){
    this.global.isLoggin=false
    this.global.logout().subscribe(res=>{
      localStorage.removeItem("token")
    })
  }

}
