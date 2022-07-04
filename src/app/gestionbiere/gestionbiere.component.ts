import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestionbiere',
  templateUrl: './gestionbiere.component.html',
  styleUrls: ['./gestionbiere.component.css']
})
export class GestionbiereComponent implements OnInit {

  biereList:any;

constructor(private http:HttpClient,
  private route:Router) { 

}

ngOnInit() {   

    this.http.get("http://localhost:8086/bieres/").subscribe({
      next: (data) => {
        this.biereList = data;
      },
      error: (err) => { console.log(err) }

    });
}

DeleteBiere(id:string){
  this.http.delete("http://localhost:8086/biere/" + id).subscribe({next: data =>
   {},error: (err) => { console.log(err) }
})
this.route.navigate(['/gestionbiere'])}
}


