import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {LoginService} from '../../services/login.service';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   loginForm:FormGroup;
   returnUrl:string;
   message:any;
  constructor(private service:LoginService,private router:Router,private formBuilder:FormBuilder,private route:ActivatedRoute) {
      if(this.service.currentUserValue)
      {
        this.router.navigate(['/panel']);
      }
   }

  ngOnInit() {
    this.createForm();
    this.returnUrl=this.route.snapshot.queryParams['returnUrl']||'/panel';
  }
   createForm()
   {
     this.loginForm=this.formBuilder.group({
       username:['',Validators.required],
       password:['',Validators.required]
     });
   }
   resetForm()
   {
     this.loginForm.reset();
   }
   close()
   {
     this.message="";
   }
  loginUser(username,password)
  {
    this.service.loginAdmin(username,password).subscribe(res=>{
      this.router.navigate([this.returnUrl]);
      this.resetForm();
    },err=>{
      this.resetForm();
      this.message="Error occured";
    });
  }
   register()
   {
     this.router.navigate(['/register']);
   }
}
