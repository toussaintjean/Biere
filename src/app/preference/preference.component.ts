import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-preference',
  templateUrl: './preference.component.html',
  styleUrls: ['./preference.component.css']
})
export class PreferenceComponent implements OnInit {

  nom_user: String = this.loggerService.getUserConnect().nom;
  preference: any  = this.loggerService.getUserConnect().pref;
  preferencep : String = "";
  preferencetaux : String = "";
  preferenceb : String ="";
  preferenceType : String ="";
  
  
  user : any = this.loggerService.getUserConnect();
  preftest: object ={};
  categories: object ={}
  //(this.http.get("http://localhost:8086/user/"+this.loggerService.getUserConnect().id_user));  


  constructor(private route: Router, private http: HttpClient, private loggerService:LoggerService) {
   user:loggerService.getUserConnect();
    //om :this.http.get('http://localhost:8086/'+loggerService.getUserConnect().nom);
  nom: loggerService.getUserConnect().nom;
  }

  ngOnInit(): void {
    if ( this.preference != null){
      this.preferencep  = this.preference.prix;
      this.preferencetaux  = this.preference.tauxAlcool;
      this.preferenceb  = this.preference.nomBiere;
      this.preferenceType  = this.preference.nomStype;
    } 
  
    this.http.get("http://localhost:8086/categories").subscribe(data => {
      this.categories = data;
      console.log(this.categories)
      
    }, err => {console.log(err)})
  }

  Majpref(pref : object): void {
    if (this.loggerService.getUserConnect().pref != null){
      this.user.pref=pref;
      this.http.put("http://localhost:8086/preference/update/"+this.loggerService.getUserConnect().pref.idPref,pref).subscribe({
        next: (data) => {console.log(data)},
        error: (err) => {console.log(err)}
        
    })
    window.location.reload ()
    } else {
      this.http.post("http://localhost:8086/preference",pref).subscribe({

    })
    this.http.get("http://localhost:8086/preference/maxId").subscribe(data=>{
      this.user.pref=data;
    },
    error => {console.log(error)})

    this.http.put("http://localhost:8086/user/update/"+this.loggerService.getUserConnect().id_user,this.user).subscribe({
      next: (data) => {console.log("modif user",data)},
      error: (err) => {console.log(err)}
  })
  this.loggerService.setUserSession(this.user);
  
    }
  }
}
