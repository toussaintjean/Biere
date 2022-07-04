import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class AdminserviceService {

  constructor(private http:HttpClient) { }

baseUrl = 'http://localhost:8086/';

  
  getUserById(userId:number):Observable<any>{
    return this.http.get(this.baseUrl+ "users/" + userId);
  }

  postUser(user:any):Observable<any>{
    return this.http.post(this.baseUrl + "user", user);
  }
  updateUser(userId:number, user:any):Observable<any>{
    return this.http.put(this.baseUrl + "user/update/" + userId, user);
  }

  getBarById(barId:number):Observable<any>{
    return this.http.get(this.baseUrl+ "bars/" + barId);
  }

  postBar(bar:any):Observable<any>{
    return this.http.post(this.baseUrl + "bar", bar);
  }
  updateBar(barId:number, bar:any):Observable<any>{
    return this.http.put(this.baseUrl + "bar/update/" + barId, bar);
  }


  getBeerById(beerId:number):Observable<any>{
    return this.http.get(this.baseUrl+ "bieres/" + beerId);
  }

  postBeer(beer:any):Observable<any>{
    return this.http.post(this.baseUrl + "biere", beer);
  }
  updateBeer(beerId:number, beer:any):Observable<any>{
    return this.http.put(this.baseUrl + "biere/update/" + beerId, beer);
  }
}