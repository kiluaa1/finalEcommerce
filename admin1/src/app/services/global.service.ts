import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  userUrl="http://localhost:3000/user"
  contactUrl="http://localhost:3000/contact"
  productUrl="http://localhost:3000/product"
  catogryUrl="http://localhost:3000/catogry"
  orderUrl="http://localhost:3000/order"



  isLoggin : boolean = false
  constructor(private http : HttpClient) { }
  login(obj:any):Observable<any>{
    return this.http.post(`${this.userUrl}/login`,obj)
  }
  registerAdmin(obj:any) :Observable<any>{
    return this.http.post(`${this.userUrl}/add_admin`,obj)
  }
  getUsers() :Observable<any>{
    return this.http.get(`${this.userUrl}/all`)
  }
  logout():Observable<any>{
    return this.http.delete(`${this.userUrl}/logout`)
  }
  getContact():Observable<any>{
    return this.http.get(`${this.contactUrl}/show`)
  }
  deleteContact(id: any): Observable<any> {
    return this.http.delete(`${this.contactUrl}/delete/${id}`)
  }
  addProduct(obj:any):Observable<any>{
    return this.http.post(`${this.productUrl}/add`,obj)
  }
  addcatogry(obj:any):Observable<any>{
    return this.http.post(`${this.catogryUrl}/add`,obj)
  }
  getorders():Observable<any>{
    return this.http.get(`${this.orderUrl}/all`)
  }
  

}
