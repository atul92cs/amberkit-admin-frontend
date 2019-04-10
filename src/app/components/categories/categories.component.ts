import { Component, OnInit,Inject } from '@angular/core';
import {LoginService} from '../../services/login.service';
import {AdminService} from '../../services/admin.service';
import {Router} from '@angular/router';
import {MatDialog,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';
import {CategoryModalComponent} from '../category-modal/category-modal.component';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
   categories:any;
   message:any;
  constructor(private service:LoginService,private aservice:AdminService,private router:Router,public matDialog:MatDialog) { }

  ngOnInit() {
      this.generateCategories();
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

    });
  }
}
