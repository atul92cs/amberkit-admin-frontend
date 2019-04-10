import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {AdminService} from '../../services/admin.service';
@Component({
  selector: 'app-category-modal',
  templateUrl: './category-modal.component.html',
  styleUrls: ['./category-modal.component.css']
})
export class CategoryModalComponent implements OnInit {
    categoryForm:FormGroup;
  constructor(public categoryDialogref:MatDialogRef<CategoryModalComponent>,@Inject(MAT_DIALOG_DATA)public data:string,private formBuilder:FormBuilder,private service:AdminService) { }

  ngOnInit() {
    this.createForm();
    this.generateCategory(this.data);
  }
  createForm()
  {
    this.categoryForm=this.formBuilder.group({
      categoryId:['',Validators.required],
      categoryName:['',Validators.required]
    });

  }
  generateCategory(data)
  {
    this.service.getCategorys(data).subscribe(res=>{
      this.categoryForm.setValue({
        categoryId:res.result.id,
        categoryName:res.result.Name
      });
    },err=>{

    });
  }

}
