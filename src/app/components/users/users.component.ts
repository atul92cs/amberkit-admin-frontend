import { Component, OnInit,Inject } from '@angular/core';
import {LoginService} from '../../services/login.service';
import {AdminService} from '../../services/admin.service';
import {Router} from '@angular/router';
import {MatDialog,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';
import {UsersModalComponent} from '../users-modal/users-modal.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
   users:any;
   message:any;
  constructor(private service:LoginService,private aservice:AdminService,private router:Router,public dialog:MatDialog) { }

  ngOnInit() {
      this.generateUsers();
  }
  generateUsers()
  {
    this.aservice.getUser().subscribe(res=>{
      this.users=res;
    },err=>{
      this.message='Users not added yet';
    });
  }
  editUsers(id)
  {
    let matDialog=this.dialog.open(UsersModalComponent,{
      width:'600px',
      data:id
    }).afterClosed().subscribe(res=>{
      this.generateUsers();
    },err=>{
      this.generateUsers();
    });
  }
}
