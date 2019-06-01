import { Component, OnInit } from '@angular/core';
import {LocationService} from '../../services/location.service';
import{FormBuilder,FormGroup,Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MatDialog,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';
import{UpdateLocationComponent} from '../update-location/update-location.component';
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
    location:any;
    locationform:FormGroup;
  constructor(private service:LocationService,private router:Router,private formBuilder:FormBuilder,public matDialog:MatDialog) { }

  ngOnInit() {
    this.generateLocation();
    this.createForm();
  }
  generateLocation()
  {
    this.service.getLocations().subscribe(res=>{
      this.location=res;
    },err=>{
      console.error(err);
    });
  }
  createForm()
  {
    this.locationform=this.formBuilder.group({
      name:['',Validators.required]
    });
  }
  resetForm()
  {
    this.locationform.reset();
  }
  createLocation(name)
  {
    this.service.addLocation(name).subscribe(res=>{
      this.resetForm();
      this.generateLocation();
    },err=>{
      this.resetForm();
      console.log(`Error occured ${err} `);
    });
  }
   editLocation(id)
   {
     let dialogRef=this.matDialog.open(UpdateLocationComponent,{
       width:'600px',
       data:id
     }).afterClosed().subscribe(res=>{
       this.generateLocation();
     });
   }
   deleteLocation(id)
   {
     this.service.deletelocation(id).subscribe(res=>{
       this.generateLocation();
     },err=>{
       console.log(`Error occured ${err}`);
     });
   }
}
