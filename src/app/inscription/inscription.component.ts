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
        this.message = "User crée"
        this.route.navigateByUrl('inscription')
    },
    error: (err) => {console.log(err)}
  })
}
}
