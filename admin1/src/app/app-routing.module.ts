import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatogryComponent } from './pages/catogry/catogry.component';
import { ContactComponent } from './pages/contact/contact.component';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProductComponent } from './pages/product/product.component';
import { RegisterComponent } from './pages/register/register.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {path:"",component:IndexComponent},
  {path:"contact",component:ContactComponent},
  {path:"product",component:ProductComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"users",component:UsersComponent},
  {path:"catogry",component:CatogryComponent},
  {path:"orders",component:OrdersComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
