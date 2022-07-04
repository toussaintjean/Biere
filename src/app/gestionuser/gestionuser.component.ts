import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gestionuser',
  templateUrl: './gestionuser.component.html',
  styleUrls: ['./gestionuser.component.css']
})
export class GestionuserComponent implements OnInit {

  userList:any;
constructor(private http:HttpClient, private route:ActivatedRoute,
  private rout:Router) { 

}

ngOnInit() {   

    this.http.get("http://localhost:8086/users/").subscribe({
      next: (data) => {
        this.userList = data;
      },
      error: (err) => { console.log(err) }

    });
  }

DeleteUser(id:string){
  this.http.delete("http://localhost:8086/user/" + id).subscribe({next: data =>{}
   ,error: (err) => { console.log(err) }
})
window.location.reload()
}
}


