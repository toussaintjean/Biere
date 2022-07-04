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
  groupe: object  ={};
  constructor(private route: Router, private http: HttpClient, private loggerService:LoggerService) { 
  user:loggerService.getUserConnect();
  }
  
  ngOnInit(): void {
    this.groupe =this.http.get("http://localhost:8086/groupe/user/"+this.loggerService.getUserConnect().id_user).subscribe(data =>{
    this.groupe = data;
    console.log("init",this.groupe)
  });
  }
  addUserToGroup(groupeUser : any): void {
    this.groupe =this.http.get("http://localhost:8086/groupe/user/"+this.loggerService.getUserConnect().id_user)
    //this.groupe=groupeUser;
    console.log("GroupeUSER", groupeUser);  
    if (this.groupe === null){
      console.log("NULL");
      this.http.post("http://localhost:8086/groupe/save/"+this.loggerService.getUserConnect().id_user,groupeUser).subscribe(data =>{
        console.log("dataG", data);  
        this.groupe = data;
        console.log("groupeG", this.groupe);  
        });
    }
    
    
     else {
      console.log("Pas NULL", groupeUser);
    
      this.http.post("http://localhost:8086/groupe/save/"+this.loggerService.getUserConnect().id_user,groupeUser).subscribe(data =>{
      console.log("dataG", data);  
      this.groupe = data;
      console.log("groupeU", this.groupe);  
      });
      this.groupe =this.http.get("http://localhost:8086/groupe/user/"+this.loggerService.getUserConnect().id_user);
      console.log("groupeP", this.groupe);  
      console.log("groupetestU", "http://localhost:8086/groupe/"+this.groupe+"/"+groupeUser.mailUser);
      this.http.put("http://localhost:8086/groupe/"+this.groupe+"/"+groupeUser.mailUser,null).subscribe(data =>{
      console.log("data", data);  
      this.groupe = data;
      console.log("groupe", this.groupe);
        
    })
  }
  //window.location.reload();
    }
  }