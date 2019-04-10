import { Component, OnInit,Inject } from '@angular/core';
import {LoginService} from '../../services/login.service';
import {AdminService} from '../../services/admin.service';
import {Router} from '@angular/router';
import {MatDialog,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';
import {SubcategoryModalComponent} from '../subcategory-modal/subcategory-modal.component';

@Component({
  selector: 'app-subcatgories',
  templateUrl: './subcatgories.component.html',
  styleUrls: ['./subcatgories.component.css']
})
export class SubcatgoriesComponent implements OnInit {
      subcategories:any;
      categories:any;
      message:any;
  constructor(private service:LoginService,private aservice:AdminService,private router:Router,public dialog:MatDialog) { }

  ngOnInit() {
    this.generateSubcategories();
    this.generateCategories();
  }
  generateSubcategories()
  {
    this.aservice.getSubcategory().subscribe(res=>{
      this.subcategories=res;
    },err=>{
      this.message='Subcategories not added yet';

    });
  }
  generateCategories()
  {
    this.aservice.getCategory().subscribe(res=>{
      this.categories=res;
    },err=>{

    });
  }
  editSubCategory(id)
  {
    let dialogRef=this.dialog.open(SubcategoryModalComponent,{
      width:'600px',
      data:id
    }).afterClosed().subscribe(res=>{});
  }
}
