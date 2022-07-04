import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestionavis',
  templateUrl: './gestionavis.component.html',
  styleUrls: ['./gestionavis.component.css']
})
export class GestionavisComponent implements OnInit {

  constructor(private http:HttpClient,
    private route:Router) { 

  }
  
  avisList:any;
  
  ngOnInit() {   
  
      this.http.get("http://localhost:8086/avis/").subscribe({
        next: (data) => {
          this.avisList = data;
        },
        error: (err) => { console.log(err) }
  
      });
  }}

