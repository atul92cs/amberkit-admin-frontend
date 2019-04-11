import { Component, OnInit,Inject } from '@angular/core';
import {LoginService} from '../../services/login.service';
import {AdminService} from '../../services/admin.service';
import {Router} from '@angular/router';
import {MatDialog,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';
import {SubupdateComponent} from '../subupdate/subupdate.component';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-subcatgories',
  templateUrl: './subcatgories.component.html',
  styleUrls: ['./subcatgories.component.css']
})
export class SubcatgoriesComponent implements OnInit {
      subcategories:any;
      categories:any;
      message:any;
      subcategoryForm:FormGroup;
  constructor(private service:LoginService,private aservice:AdminService,private router:Router,public dialog:MatDialog,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.generateSubcategories();
    this.generateCategories();
    this.createForm();
  }
  createForm()
  {
    this.subcategoryForm=this.formBuilder.group({
      name:['',Validators.required],
      category:['',Validators.required]
    });
  }
  resetForm()
  {
    this.subcategoryForm.reset();
  }
  createSubcategory(name,category)
  {
    this.aservice.insertsubCategory(name,category).subscribe(res=>{
      this.resetForm();
      this.generateSubcategories();
    },err=>{
         this.resetForm();
         this.generateSubcategories();
    });
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
    let dialogRef=this.dialog.open(SubupdateComponent,{
      width:'600px',
      data:id
    }).afterClosed().subscribe(res=>{
      this.generateSubcategories();
    },err=>{
      this.generateSubcategories();
    });
  }
  subcategoryDelete(id)
  {
    this.aservice.deletesubCategory(id).subscribe(res=>{
      this.generateSubcategories();
    },err=>{
        this.generateSubcategories();    
    });
  }
}
