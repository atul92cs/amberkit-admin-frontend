import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {AdminService} from '../../services/admin.service';
@Component({
  selector: 'app-subupdate',
  templateUrl: './subupdate.component.html',
  styleUrls: ['./subupdate.component.css']
})
export class SubupdateComponent implements OnInit {
   subcategoryform:FormGroup;
   categories:any;

  constructor(public subupdateDialogRef:MatDialogRef<SubupdateComponent>,@Inject(MAT_DIALOG_DATA)public data:string,private formBuilder:FormBuilder,private service:AdminService) { }

  ngOnInit() {
    this.createForm();
    this.generateSubcategory(this.data);
    this.generateCategory();
  }
   createForm()
   {
     this.subcategoryform=this.formBuilder.group({
       id:['',Validators.required],
       name:['',Validators.required],
       category:['',Validators.required]
     });
   }

   generateSubcategory(data)
   {

  this.service.getSubcategorys(data).subscribe(res=>{

  this.subcategoryform.setValue({
    id:res.result[0].id,
    name:res.result[0].Name,
    category:res.result[0].Categoryid
  });
  },err=>{

  });
   }
   generateCategory()
   {
     this.service.getCategory().subscribe(res=>{
       this.categories=res;
     });
   }
   resetForm()
   {
     this.subcategoryform.reset();
   }
   updatesubCategory(id,name,category)
   {
     this.service.updatesubCategory(id,name,category).subscribe(res=>{
       this.subupdateDialogRef.close();
        this.resetForm();
     },err=>{
       this.subupdateDialogRef.close();
        this.resetForm();
     });
   }
}
