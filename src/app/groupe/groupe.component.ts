import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggerService } from '../services/logger.service';
@Component({
  selector: 'app-groupe',
  templateUrl: './groupe.component.html',
  styleUrls: ['./groupe.component.css']
})
export class GroupeComponent implements OnInit { 
  user : any = this.loggerService.getUserConnect();  
  groupe: any;
  constructor(private route: Router, private http: HttpClient, private loggerService:LoggerService) { 
  user:loggerService.getUserConnect();
  }
  
  ngOnInit(): void {
    this.groupe =this.http.get("http://localhost:8086/groupe/user/"+this.loggerService.getUserConnect().id_user).subscribe(data =>{
    console.log("data", data);  
    this.groupe = data;
    console.log("groupe", this.groupe);
  });
  }
  addUserToGroup(groupeUser : Object): void {
    //this.groupe =this.http.get("http://localhost:8086/groupe/user/"+this.loggerService.getUserConnect().id_user)
    //this.groupe=groupeUser;
    if (this.groupe != null){
      console.log("NULL");
        
    }
    
     else {
      console.log("Pas NULL", groupeUser);
    
      this.http.post("http://localhost:8086/groupe/save/"+this.loggerService.getUserConnect().id_user,groupeUser).subscribe(data =>{
      console.log("dataG", data);  
      this.groupe = data;
      console.log("groupeG", this.groupe);  
      });
      this.http.put("http://localhost:8086/groupe/1/test",groupeUser).subscribe(data =>{
      console.log("data", data);  
      this.groupe = data;
      console.log("groupe", this.groupe);
        
    })
  }
  window.location.reload();
    }
  }