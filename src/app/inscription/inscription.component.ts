import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  message: String = ""
  constructor(private route:Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  inscription(user: object):void {
    //this.route.navigateByUrl('recherche')
    this.http.post("http://localhost:8086/user", user).subscribe({
      next: (data) => {
        console.log(data)
        this.message = "Vous êtes désormais inscrit ! <br/>Veuillez patientez, vous allez être redirigé vers la page de connexion dans 5 secondes..."
        setTimeout(() => {
          this.route.navigateByUrl('connexionbis')
        }, 5000)
    },
    error: (err) => {console.log(err)}
  })
}
}
