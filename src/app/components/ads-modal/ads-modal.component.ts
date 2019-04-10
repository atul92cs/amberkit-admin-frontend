import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';
import {AdminService} from '../../services/admin.service';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-ads-modal',
  templateUrl: './ads-modal.component.html',
  styleUrls: ['./ads-modal.component.css']
})
export class AdsModalComponent implements OnInit {
   Adform:FormGroup;
  constructor(public adDialogref:MatDialogRef<AdsModalComponent>,@Inject(MAT_DIALOG_DATA) public data:string,private service:AdminService,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.createForm();
    this.getAdsdetails(this.data);
  }
  getAdsdetails(data)
  {
    this.service.getAd(data).subscribe(res=>{
        this.Adform.setValue({
          Adid:res.result.id,
          Title:res.result.Title,
          Content:res.result.Content,
          Category:res.result.Category,
          Subcategory:res.result.Subcategory,
          Status:res.result.Status
        });
     });
  }
   createForm()
   {
     this.Adform=this.formBuilder.group({
       Adid:['',Validators.required],
       Title:['',Validators.required],
       Content:['',Validators.required],
       Category:['',Validators.required],
       Subcategory:['',Validators.required],
       Status:['',Validators.required]
     });
   }

}
