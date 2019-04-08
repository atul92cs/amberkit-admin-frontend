import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
   readonly apiUrl='http://localhost:8080/admin/';
  constructor(private http:HttpClient) {
   }
  registerUser(username,password,role)
  {
    const registerData={
      username:username,
      password:password,
      role:role
    }
    return this.http.post<any>(this.apiUrl+'/register',registerData);
  }
}
