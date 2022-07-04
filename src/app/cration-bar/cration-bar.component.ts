import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-cration-bar',
  templateUrl: './cration-bar.component.html',
  styleUrls: ['./cration-bar.component.css']
})
export class CrationBarComponent implements OnInit {

  barId:number=0;
  bar:any={
    idBar:0,
    nom:'',
    localisation:'',
    adresse:'',
    debHapp:'',
    finHapp:'',
    siteWeb:'',
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
    this.barId = +this.proute.snapshot.params['idBar']
    this.bindEditBar();
  }
 


bindEditBar(){
  this.adminservice.getBarById(this.barId).subscribe(data =>{
    this.bar={
      idBar:this.barId,
      nom:data.nom,
      localisation:data.localisation,
      adresse:data.adresse,
      debHapp:data.debHapp,
      finHapp:data.finHapp,
      siteWeb:data.siteWeb,}}
      )}

      submit(adminForm: NgForm){
        console.log(adminForm)
      
 if(this.barId >0){
  this.bar={
    idBar:this.barId,
    nom:adminForm.value.nom,
    localisation:adminForm.value.localisation,
    adresse:adminForm.value.adresse,
    debHapp:adminForm.value.debHapp,
    finHapp:adminForm.value.finHapp,
    siteWeb:adminForm.value.siteWeb,}
    this.adminservice.updateBar(this.barId, this.bar).subscribe(data=>{
 
        this.messagesuccess = 'Informations bar mises à jour';
        this.success=true;
        setTimeout(() => {
          this.route.navigate(["/gestionbar"]);
        }, 3000);
    });
  }
  else{
    this.bar={
      nom:adminForm.value.nom,
      localisation:adminForm.value.localisation,
      adresse:adminForm.value.adresse,
      debHapp:adminForm.value.debHapp,
      finHapp:adminForm.value.finHapp,
      siteWeb:adminForm.value.siteWeb,};

    this.adminservice.postUser(this.bar).subscribe((res)=> {
        if(res.barId > 0){
          this.messagesuccess = 'Bar créé avec succès';
          this.success=true;
      
      }else{
        this.messageerror = 'Oups! une erreur est survenue!';
        this.error=true;
      }
    });
  }
  }
}

