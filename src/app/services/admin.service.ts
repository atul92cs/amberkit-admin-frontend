import { Injectable } from '@angular/core';
import {Ads} from '../models/ads.model';
import {Category} from '../models/category.model';
import {Subcategory} from '../models/subcategory.model';
import {UserModel} from '../models/usermodel.model';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
   readonly apiUrl='http://localhost:8080/';
  constructor(private http:HttpClient) { }
  getAds()
  {
    return this.http.get<Ads[]>(this.apiUrl+'ad/');
  }
  getAd(id:string)
  {
    return this.http.get<any>(this.apiUrl+'ad/'+id);
  }
  getUser()
  {
    return this.http.get<UserModel[]>(this.apiUrl+'user/');
  }
  getUsers(id:string)
  {
    return this.http.get<any>(this.apiUrl+'user/'+id);
  }
  getCategory()
  {
    return this.http.get<Category[]>(this.apiUrl+'category/');
  }
  getCategorys(id:string)
  {
    return this.http.get<any>(this.apiUrl+'category/'+id);
  }
  getSubcategory()
  {
    return this.http.get<Subcategory[]>(this.apiUrl+'subcategory/');
  }
  getSubcategorys(id:string)
  {
    return this.http.get<any>(this.apiUrl+'subcategory/'+id);
  }
  insertCategory(name)
  {
    const categoryData={
      name:name
    }
    return this.http.post<any>(this.apiUrl+'category/add',categoryData);
  }
  updateCategory(id,name)
  {
    const categoryData={
      name:name
    }
    return this.http.put<any>(this.apiUrl+'category/'+id,categoryData);
  }
  deleteCategory(id)
  {
    return this.http.delete<any>(this.apiUrl+'category/'+id);
  }
  insertsubCategory(name,category)
  {
    const subcategoryData={
      name:name,
      category:category
    }
    return this.http.post<any>(this.apiUrl+'subcategory/add',subcategoryData);
  }
  updatesubCategory(id,name,category)
  {
    const subcategoryData={
      name:name,
      category:category
    }
    return this.http.put<any>(this.apiUrl+'subcategory/'+id,subcategoryData);
  }
  deletesubCategory(id)
  {
    return this.http.delete<any>(this.apiUrl+'subcategory/'+id);
  }
  updateUser(id,status)
  {
    const userData={
      status:status
    }
    return this.http.put<any>(this.apiUrl+'user/'+id,userData);
  }
}
