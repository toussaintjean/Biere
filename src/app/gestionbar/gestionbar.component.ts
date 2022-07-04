import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestionbar',
  templateUrl: './gestionbar.component.html',
  styleUrls: ['./gestionbar.component.css']
})
export class GestionbarComponent implements OnInit {

  constructor(private http:HttpClient,
    private route:Router) { 

  }
  
  barList:any;
  
  ngOnInit() {   
  
      this.http.get("http://localhost:8086/bars/").subscribe({
        next: (data) => {
          this.barList = data;
        },
        error: (err) => { console.log(err) }
  
      });
  }

  DeleteBar(id:string){
    this.http.delete("http://localhost:8086/bar/" + id).subscribe({next: data =>
     {},error: (err) => { console.log(err) }
  })
  

  window.location.reload()
}
}
