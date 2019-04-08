import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PanelComponent} from './components/panel/panel.component';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';

const routes: Routes = [
  {path:'panel',component:PanelComponent},
  {path:'register',component:RegisterComponent},
  {path:'',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
