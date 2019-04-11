import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';
import {AdminService} from '../../services/admin.service';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-users-modal',
  templateUrl: './users-modal.component.html',
  styleUrls: ['./users-modal.component.css']
})
export class UsersModalComponent implements OnInit {
   userupdate:FormGroup;
  constructor(public userDialogRef:MatDialogRef<UsersModalComponent>,@Inject(MAT_DIALOG_DATA)public data:string,private formBuilder:FormBuilder,private service:AdminService) { }

  ngOnInit() {
    this.createForm();
    this.getUser(this.data);
  }
    createForm()
    {
      this.userupdate=this.formBuilder.group({
        id:['',Validators.required],
        name:['',Validators.required],
        status:['',Validators.required]
      });
    }
    getUser(data)
    {
      this.service.getUsers(data).subscribe(res=>{
        this.userupdate.setValue({
          id:res.result.id,
          name:res.result.Name,
          status:res.result.Status
        });
      });
    }
}
