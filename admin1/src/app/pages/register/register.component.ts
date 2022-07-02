import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
model :any={}
errMsg =null
  constructor(private global:GlobalService , private router : Router) { }

  ngOnInit(): void {
  }
  handleRegister(form:NgForm){
    if(form.valid){
      this.global.registerAdmin(this.model).subscribe(data=>{
      // console.log(data)
      this.router.navigate([""])
      }
      ,(err)=>{
        console.log(err)
        this.errMsg = err
      })
    }
    
  }

}
