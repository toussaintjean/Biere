import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { MarkerWithLabel } from '@googlemaps/markerwithlabel';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})

export class RechercheComponent implements OnInit {
  @ViewChild(MapInfoWindow, { static: false }) info!: MapInfoWindow
  f="ggg";
  bars: object = [];
  markers: any= [];
  marker = {
    position: { lat: 48.856614, lng: 2.3522219 },
 }

  nom_bars: Array<String> = [];
  localisation_bars_str:Array<String> = [];
  localisation_str:String ="";
  
  nom:string = "";
  adresse:string = "";
  debHappyH:number = 0;
  finHappyH:number = 0;
  siteWeb:string = "";

  splitted_loc: Array<String> = [];
  center: google.maps.LatLngLiteral =  ({lat: 0, lng: 0})
  
  constructor(private http: HttpClient) { }
  NomBar = ''
  DescriptionBar = 'fezqgqe'
  DescriptionBar2 = '<h3>Locronan</h3>'
  + '<a href="http://www.locronan-tourisme.com/" target="_blank">Site de l office de tourisme de la ville</a>'
  + '<br/><img src="image.jpg" width="200px" />'


  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: 48.856614,
        lng: 2.3522219,
      }
    })

    this.http.get("http://localhost:8086/bars").subscribe(data => {
      this.bars = data;
      console.log(this.bars);
      let liste_bars = this.bars;
      for(var i=0; i < Object.keys(liste_bars).length; i++){
        //this.nom_bars.push(Object.values(liste_bars)[i].nom)
        //this.localisation_bars_str.push(Object.values(liste_bars)[i].localisation);
        this.nom = Object.values(liste_bars)[i].nom;
        this.adresse = Object.values(liste_bars)[i].adresse;
        this.debHappyH = Object.values(liste_bars)[i].deb_happ;
        this.finHappyH = Object.values(liste_bars)[i].fin_happ;
        this.siteWeb = Object.values(liste_bars)[i].siteWeb;
        this.localisation_str = Object.values(liste_bars)[i].localisation;
        this.splitted_loc = this.localisation_str.split(",",2);
        //this.markers.push(new google.maps.Marker({
          //position: {lat: Number(this.splitted_loc[0]), lng: Number(this.splitted_loc[1])},
          //label: {color: 'red', text: "Adresse : " + this.adresse + " Happy-Hour : " + this.debHappyH + " - " + this.finHappyH + " heures" +"\n" + "Site Web: " + this.siteWeb},
          //title: "Son nom: <br>"+this.nom,
        //}))
        this.markers.push(new MarkerWithLabel({
          position: {lat: Number(this.splitted_loc[0]), lng: Number(this.splitted_loc[1])},
          labelContent: "Adresse : " + this.adresse + " Happy-Hour :" + this.debHappyH + " - " + this.finHappyH + " heures" +"\n" + "Site Web: " + this.siteWeb,
          title: 'Son nom: <br/>'+this.nom,
        }))
        console.log("site", this.siteWeb);}

      //console.log(this.nom_bars);
      //console.log(this.localisation_bars_str);
      //console.log(this.markers)
    }, err => {
      console.log(err);
    })
  }

  openInfo(marker:MapMarker, title:string, descri:string){
    this.NomBar = title
    this.DescriptionBar = descri
    this.info.open(marker)
  }


}
