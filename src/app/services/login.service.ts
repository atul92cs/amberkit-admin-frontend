import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Admin} from '../models/user.model';
import {BehaviorSubject,Observable} from 'rxjs';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
   readonly apiUrl='http://localhost:8080/admin/';
  private currentUserSubject:BehaviorSubject<Admin>;
  private currentUser:Observable<Admin>;
  constructor(private http:HttpClient) {
     this.currentUserSubject=new BehaviorSubject(JSON.parse(localStorage.getItem('currentAdmin')));
     this.currentUser=this.currentUserSubject.asObservable();
   }
   public get currentUserValue():Admin
   {
     return this.currentUserSubject.value;
   }
   loginAdmin(username,password)
   {
     const loginData={
       username:username,
       password:password
     }

     return this.http.post<any>(this.apiUrl+'/login',loginData).pipe(map(admin=>{
       if(admin && admin.token)
        {
          localStorage.setItem('currentAdmin',JSON.stringify(admin));
          this.currentUserSubject.next(admin);
        }
        return admin;
     }));

   }
   logout()
   {
     localStorage.removeItem('currentAdmin');
    this.currentUserSubject.next(null);
   }
}
