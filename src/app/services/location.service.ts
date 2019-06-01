import { Injectable } from '@angular/core';
import {Location} from '../models/location.model';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LocationService {
   readonly apiUrl='http://localhost:8080/location/';
  constructor(private http:HttpClient) { }
  getLocations()
  {
    return this.http.get<Location[]>(this.apiUrl);
  }
  addLocation(name:string)
  {
    const locationData={
      name:name
    }
    return this.http.post<any>(this.apiUrl+'add',locationData);
  }
  getLocation(id:number)
  {
    return this.http.get<any>(this.apiUrl+id);
  }
  updateLocation(id,name)
  {
    const locationData={
      name:name
    }
    return this.http.put(this.apiUrl+id,locationData);
  }
  deletelocation(id)
  {
    return this.http.delete(this.apiUrl+id);
  }
}
