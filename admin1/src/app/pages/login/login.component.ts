import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email:new FormControl("",[Validators.required]),
    password :new FormControl("", [Validators.required])
  })
  get loginData() { return this.loginForm.controls }
  isSubmitted =false
  constructor(private global : GlobalService , private router : Router) { }
  errorMsg= null
  ngOnInit(): void {
  }
  handleSubmit(){
    this.isSubmitted=true
    if(this.loginForm.valid){
      this.global.login(this.loginForm.value).subscribe(res=>{
        console.log(res);
        if (res.data.token){
          localStorage.setItem("token",res.data.token)
          this.global.isLoggin=true
          this.router.navigate([""])
        }
        
      },(err)=>{
        this.errorMsg = err
      })

    }
  }
}
