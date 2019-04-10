import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PanelComponent} from './components/panel/panel.component';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {CategoriesComponent} from './components/categories/categories.component';
import {SubcatgoriesComponent} from './components/subcatgories/subcatgories.component';
import {UsersComponent} from './components/users/users.component';
const routes: Routes = [
  {path:'panel',component:PanelComponent},
  {path:'register',component:RegisterComponent},
  {path:'',component:LoginComponent},
  {path:'category',component:CategoriesComponent},
  {path:'subcategory',component:SubcatgoriesComponent},
  {path:'user',component:UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
