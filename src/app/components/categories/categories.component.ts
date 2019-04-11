import { Component, OnInit,Inject } from '@angular/core';
import {LoginService} from '../../services/login.service';
import {AdminService} from '../../services/admin.service';
import {Router} from '@angular/router';
import {MatDialog,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';
import {CategoryModalComponent} from '../category-modal/category-modal.component';
import{FormBuilder,FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
   categories:any;
   message:any;
   categoryForm:FormGroup;
  constructor(private service:LoginService,private aservice:AdminService,private router:Router,public matDialog:MatDialog,private formBuilder:FormBuilder) { }

  ngOnInit() {
      this.generateCategories();
      this.createForm();
  }
  resetForm()
  {
    this.categoryForm.reset();
  }
  createForm()
  {
    this.categoryForm=this.formBuilder.group({
      name:['',Validators.required]
    });
  }
   createCategory(name)
   {
     this.aservice.insertCategory(name).subscribe(res=>{
       this.resetForm();
       this.generateCategories();
     },err=>{
       this.resetForm();
       this.generateCategories();
     });
   }
  generateCategories()
  {
    this.aservice.getCategory().subscribe(res=>{
      this.categories=res;
    },err=>{
      this.message='Categories not added yet';
    });
  }
  editCategory(id)
  {
    let dialogRef=this.matDialog.open(CategoryModalComponent,{
      width:'600px',
      data:id
    }).afterClosed().subscribe(res=>{
        this.generateCategories();
    });
  }
  deleteCategory(id)
  {
    this.aservice.deleteCategory(id).subscribe(res=>{
      this.generateCategories();
    });
  }
}
