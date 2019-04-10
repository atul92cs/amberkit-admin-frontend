import { Component, OnInit,Inject } from '@angular/core';
import {LoginService} from '../../services/login.service';
import {AdminService} from '../../services/admin.service';
import {Router} from '@angular/router';
import {MatDialog,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';
import {UsersModalComponent} from '../users-modal/users-modal.component';
@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
    message:any;
    ads:any;



  constructor(private service:AdminService,private aservice:LoginService,private router:Router,public dialog:MatDialog) { }

  ngOnInit() {
    this.generateAds();



  }
   Logout()
   {
     this.aservice.logout();
      this.router.navigate(['/']);
   }


    generateAds()
    {
      this.service.getAds().subscribe(res=>{
        this.ads=res;
      },err=>{
        this.message='No ads added yet';
      });
    }
     editAd(id)
     {
       let matDialogref=this.dialog.open(UsersModalComponent,{
         width:'600px',
         data:id
       }).afterClosed().subscribe(res=>{});
     }
}
