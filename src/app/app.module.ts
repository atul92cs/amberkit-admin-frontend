import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatDialogModule} from '@angular/material/dialog';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PanelComponent } from './components/panel/panel.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CategoriesComponent } from './components/categories/categories.component';
import { SubcatgoriesComponent } from './components/subcatgories/subcatgories.component';
import { UsersComponent } from './components/users/users.component';
import { CategoryModalComponent } from './components/category-modal/category-modal.component';
import { SubcategoryModalComponent } from './components/subcategory-modal/subcategory-modal.component';
import { UsersModalComponent } from './components/users-modal/users-modal.component';
import { AdsModalComponent } from './components/ads-modal/ads-modal.component';
import { SubupdateComponent } from './components/subupdate/subupdate.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { LocationComponent } from './components/location/location.component';
import { UpdateLocationComponent } from './components/update-location/update-location.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    PanelComponent,
    CategoriesComponent,
    SubcatgoriesComponent,
    UsersComponent,
    CategoryModalComponent,
    SubcategoryModalComponent,
    UsersModalComponent,
    AdsModalComponent,
    SubupdateComponent,
    LocationComponent,
    UpdateLocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[CategoryModalComponent,SubcategoryModalComponent,UsersModalComponent,SubupdateComponent,UpdateLocationComponent]
})
export class AppModule { }
