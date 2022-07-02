import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-catogry',
  templateUrl: './catogry.component.html',
  styleUrls: ['./catogry.component.css']
})
export class CatogryComponent implements OnInit {

  constructor(private global:GlobalService) { }
  model :any={}
  errMsg =null

  ngOnInit(): void {
  }
  handleAddCatogry(form:NgForm){
    if(form.valid){
      this.global.addcatogry(this.model).subscribe(data=>{
      }
      ,(err)=>{
        console.log(err)
        this.errMsg = err
      })
    }
    
  }

}
