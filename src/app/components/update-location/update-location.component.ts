import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';
import {LocationService} from '../../services/location.service';
import{FormBuilder,FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-update-location',
  templateUrl: './update-location.component.html',
  styleUrls: ['./update-location.component.css']
})
export class UpdateLocationComponent implements OnInit {
    updatelocation:FormGroup;
  constructor(private service:LocationService,private formBuilder:FormBuilder,public updateLocationRef:MatDialogRef<UpdateLocationComponent>,@Inject(MAT_DIALOG_DATA) public data:string) { }

  ngOnInit() {
    this.createForm();
    this.getData(this.data);
  }
  createForm()
  {
    this.updatelocation=this.formBuilder.group({
      id:['',Validators.required],
      name:['',Validators.required]
    });
  }
   getData(data)
   {
       this.service.getLocation(data).subscribe(res=>{
         this.updatelocation.setValue({
           id:res.result.id,
           name:res.result.Name
         });
       },err=>{

       });
   }
   Updatelocation(id,name)
   {
     this.service.updateLocation(id,name).subscribe(res=>{
       this.updatelocation.reset();
       this.updateLocationRef.close();
     },err=>{
       this.updatelocation.reset();
       this.updateLocationRef.close();
       console.log(`error ${err}`);
     });
   }
}
