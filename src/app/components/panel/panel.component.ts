import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';
import {AdminService} from '../../services/admin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
    message:any;
    ads:any;
    categories:any;
    subcategories:any;
    users:any;
  constructor(private service:AdminService,private aservice:LoginService,private router:Router) { }

  ngOnInit() {
    this.generateAds();
    this.generateUsers();
    this.generateCategories();
    this.generateSubcategories();
  }
   Logout()
   {
     this.aservice.logout();
      this.router.navigate(['/']);
   }
    generateCategories()
    {
      this.service.getCategory().subscribe(res=>{
        this.categories=res;
      },err=>{
        this.message='Categories not added yet';
      });
    }
    generateSubcategories()
    {
      this.service.getSubcategory().subscribe(res=>{
        this.subcategories=res;
      },err=>{
        this.message='Subcategories not added yet';
      });
    }
    generateAds()
    {
      this.service.getAds().subscribe(res=>{
        this.ads=res;
      },err=>{
        this.message='No ads added yet';
      });
    }
    generateUsers()
    {
      this.service.getUser().subscribe(res=>{
        this.users=res;
      },err=>{
        this.message='Users not added yet';
      });
    }
}
