import { getLocaleTimeFormat } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-creation-biere',
  templateUrl: './creation-biere.component.html',
  styleUrls: ['./creation-biere.component.css']
})
export class CreationBiereComponent implements OnInit {

  beerId:number=0;
  beer:any={
    idBierre:0,
    nom:'',
    catId:0,
    styleId:0,
    degre:'',
  }
  catId:any;
  styleId:any;
  success:boolean=false;
  error:boolean=false;
  messageerror='';
  messagesuccess='';


  constructor(private http:HttpClient,
     private route:Router, 
     private proute:ActivatedRoute, 
     private adminservice:AdminserviceService) { }

  ngOnInit(): void {
    this.beerId = +this.proute.snapshot.params['idBiere']
    this.bindEditBeer();
    this.getCat();
  }
 
getCat(){
  this.http.get("http://localhost:8086/categories").subscribe({
    next: (data) => {
      this.catId = data;

    },
    error: (err) => { console.log(err) }
  });}

  getStyle(){
    this.http.get("http://localhost:8086/styles").subscribe({
      next: (data) => {
        this.styleId = data;
  
      },
      error: (err) => { console.log(err) }
    });}

bindEditBeer(){
  this.adminservice.getBeerById(this.beerId).subscribe(data =>{
    this.beer={
      idBar:this.beerId,
      nom:data.nom,
      catId:data.catId,
      styleId:data.styleId,
      degre:data.degre,}}
      )}

      submit(adminForm: NgForm){
        console.log(adminForm)
      
 if(this.beerId >0){
  this.beer={
    idBar:this.beerId,
    nom:adminForm.value.nom,
    catId:adminForm.value.catId,
    styleId:adminForm.value.styleId,
    degre:adminForm.value.degre,
  }
    this.adminservice.updateBar(this.beerId, this.beer).subscribe(data=>{
 
        this.messagesuccess = 'Informations des bières mises à jour';
        this.success=true;
        setTimeout(() => {
          this.route.navigate(["/gestionbiere"]);
        }, 3000);
    });
  }
  else{
    this.beer={
      nom:adminForm.value.nom,
      catId:adminForm.value.catId,
      styleId:adminForm.value.styleId,
      degre:adminForm.value.degre,
    };

    this.adminservice.postUser(this.beer).subscribe((res)=> {
        if(res.beerId > 0){
          this.messagesuccess = 'Biere créé avec succès';
          this.success=true;
      
      }else{
        this.messageerror = 'Oups! une erreur est survenue!';
        this.error=true;
      }
    });
  }
  }


  
}

