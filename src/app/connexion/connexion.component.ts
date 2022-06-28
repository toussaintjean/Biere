import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  user:object = {};
  message:string =""
  id_user:number = 0;
  constructor(private route: Router,  private http: HttpClient) { }

  ngOnInit(): void {
  }

  goToHomeB(login:string, password:string):void{
    this.http.get('http://localhost:8086/users/' + login + '/' + password).subscribe(data => {
      this.user = data;
      console.log("User", this.user);
      let obj = this.user;
      this.id_user= Object.values(obj)[0]
      if (this.user!= null){
        this.route.navigateByUrl('recherche');
      } else {
        this.route.navigateByUrl('connexion');
        this.message = "Login ou Mot de Passe incorrect" 
      }
    }, err => {
      console.log(err);
    })
  }

}
