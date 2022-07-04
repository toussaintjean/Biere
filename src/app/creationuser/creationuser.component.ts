import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AdminserviceService } from '../adminservice.service';
@Component({
  selector: 'app-creationuser',
  templateUrl: './creationuser.component.html',
  styleUrls: ['./creationuser.component.css']
})
export class CreationuserComponent implements OnInit {
  userId:number=0;
  user:any={
    id_user:0,
    nom:'',
    prenom:'',
    mail:'',
    password:'',
  }
  success:boolean=false;
  error:boolean=false;
  messageerror='';
  messagesuccess='';


  constructor(private http:HttpClient,
     private route:Router, 
     private proute:ActivatedRoute, 
     private adminservice:AdminserviceService) { }

  ngOnInit(): void {
    this.userId = +this.proute.snapshot.params['id_user']
    this.bindEditUser();
  }
 


bindEditUser(){
  this.adminservice.getUserById(this.userId).subscribe(data =>{
    this.user={
      id_user:this.userId,
      nom:data.nom,
      prenom:data.prenom,
      mail:data.mail,
      password:data.password,}}
      )}

      submit(adminForm: NgForm){
        console.log(adminForm)
      
 if(this.userId >0){
  this.user={
    id_user:this.userId,
    nom:adminForm.value.nom,
    prenom:adminForm.value.prenom,
    mail:adminForm.value.mail,
    password:adminForm.value.password,}
    this.adminservice.updateUser(this.userId, this.user).subscribe(data=>{
 
        this.messagesuccess = 'Informations utilisateur mises à jour';
        this.success=true;
        setTimeout(() => {
          this.route.navigate(["/gestionuser"]);
        }, 3000);
    });
  }
  else{
    this.user={
    nom:adminForm.value.nom,
    prenom:adminForm.value.prenom,
    mail:adminForm.value.mail,
    password:adminForm.value.password,};

    this.adminservice.postUser(this.user).subscribe((res)=> {
        if(res.id_user > 0){
          this.messagesuccess = 'Utilisateur créé avec succès';
          this.success=true;
      
      }else{
        this.messageerror = 'Oups! une erreur est survenue!';
        this.error=true;
      }
    });
  }
  }
}
