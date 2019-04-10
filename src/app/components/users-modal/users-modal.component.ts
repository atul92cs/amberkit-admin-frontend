import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-users-modal',
  templateUrl: './users-modal.component.html',
  styleUrls: ['./users-modal.component.css']
})
export class UsersModalComponent implements OnInit {

  constructor(public userDialogRef:MatDialogRef<UsersModalComponent>,@Inject(MAT_DIALOG_DATA)public data:string) { }

  ngOnInit() {
  }

}
