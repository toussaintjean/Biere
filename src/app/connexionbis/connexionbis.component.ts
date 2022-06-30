import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-connexionbis',
  templateUrl: './connexionbis.component.html',
  styleUrls: ['./connexionbis.component.css']
})
export class ConnexionbisComponent implements OnInit {

  user:object = {};
  message:string="";
  id_user:number = 0;
  constructor(private route: Router, private http: HttpClient, private loggerService:LoggerService) { }

  ngOnInit(): void {
  }

  goProfile(login: String, password: String):void{
    this.http.get('http://localhost:8086/user/' + login + '/' + password).subscribe(data => {
      this.user = data;
      console.log("User", this.user);
      let obj = this.user;
      //this.id_user= Object.values(obj)[0]
      if (this.user!= null){
        this.route.navigateByUrl('recherche')
        this.loggerService.setUserSession(this.user);
      } else {
        this.route.navigateByUrl('connexionbis');
        this.message = "Login ou Mot de Passe incorrect(s)..." 
        console.log(this.message)
      }
    }, err => {
      console.log(err);
    })
  }

  goToInscription(): void{
    this.route.navigateByUrl('inscription')
  }

}
