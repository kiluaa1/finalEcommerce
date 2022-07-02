import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private global:GlobalService) { }
  model :any={}
  errMsg =null
  ngOnInit(): void {
  }

  handleAddProduct(form:NgForm){
    if(form.valid){
      this.global.addProduct(this.model).subscribe(data=>{
      }
      ,(err)=>{
        console.log(err)
        this.errMsg = err
      })
    }
    
  }

}
