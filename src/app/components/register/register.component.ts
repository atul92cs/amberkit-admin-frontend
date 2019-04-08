import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../../services/register.service';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    registerForm:FormGroup;
    message:any;
  constructor(private formBuilder:FormBuilder,private service:RegisterService) { }

  ngOnInit() {
    this.createForm();
  }
  createForm()
  {
    this.registerForm=this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required],
      role:['',Validators.required]
    });
  }
  resetForm()
  {
    this.registerForm.reset();
  }
  close()
  {
    this.message="";
  }
  registerAdmin(username,password,role)
  {

    this.service.registerUser(username,password,role).subscribe(res=>{
      this.message="User registered please proceed further";
      this.resetForm();
    },err=>{
      this.message="Error occured";
      this.resetForm();
    });
  }
}
