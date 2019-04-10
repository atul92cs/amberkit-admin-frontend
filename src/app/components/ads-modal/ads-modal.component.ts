import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-ads-modal',
  templateUrl: './ads-modal.component.html',
  styleUrls: ['./ads-modal.component.css']
})
export class AdsModalComponent implements OnInit {

  constructor(public adDialogref:MatDialogRef<AdsModalComponent>) { }

  ngOnInit() {
  }

}
