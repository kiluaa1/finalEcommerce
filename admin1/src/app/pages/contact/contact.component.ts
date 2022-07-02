import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  allComment:any[]=[]
  constructor(private global:GlobalService) { 
    this.global.getContact().subscribe(res=>{
    this.allComment=res.data
    console.log(res.data)
  })
  } 
  ngOnInit(): void {
  }
  delete(id:any){
    this.global.deleteContact(id).subscribe(res => {
      location.reload();
  })
  }
  
  

}
