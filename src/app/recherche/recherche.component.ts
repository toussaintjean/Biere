import { HttpClient } from '@angular/common/http';
import { SelectorListContext } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { MarkerWithLabel } from '@googlemaps/markerwithlabel';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})

export class RechercheComponent implements OnInit {
  @ViewChild(MapInfoWindow, { static: false }) info!: MapInfoWindow
  f = "ggg";
  bars: object = [];
  markers: any = [];
  marker = {
    position: { lat: 48.856614, lng: 2.3522219 },
  }

  nom_bars: Array<String> = [];
  localisation_bars_str: Array<String> = [];
  localisation_str: String = "";

  nom: string = "";
  adresse: string = "";
  debHappyH: string = "";
  finHappyH: string = "";
  siteWeb: string = "";

  splitted_loc: Array<String> = [];
  center: google.maps.LatLngLiteral = ({ lat: 0, lng: 0 })

  selectElement: any
  selectFilter: any
  arrondissements = ['75001', '75002', '75003', '75004', '75005', '75006', '75007', '75008', '75009', '75010', '75011', '75012', '75013', '75014', '75015', '75016', '75017', '75018', '75019', '75020', "Autre"]
  prixBieres = ['3', '5', '7', '10', '15']
  nbBarsFiltres:number = 0

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
      //console.log(this.bars);
      let liste_bars = this.bars;
      this.getLengthBar(liste_bars)
      for (var i = 0; i < Object.keys(liste_bars).length; i++) {
        //this.nom_bars.push(Object.values(liste_bars)[i].nom)
        //this.localisation_bars_str.push(Object.values(liste_bars)[i].localisation);
        this.nom = Object.values(liste_bars)[i].nom;
        this.adresse = Object.values(liste_bars)[i].adresse;
        this.debHappyH = Object.values(liste_bars)[i].debHapp;
        this.finHappyH = Object.values(liste_bars)[i].finHapp;
        this.siteWeb = Object.values(liste_bars)[i].siteWeb;
        this.localisation_str = Object.values(liste_bars)[i].localisation;
        this.splitted_loc = this.localisation_str.split(",", 2);
        //this.markers.push(new google.maps.Marker({
        //position: {lat: Number(this.splitted_loc[0]), lng: Number(this.splitted_loc[1])},
        //label: {color: 'red', text: "Adresse : " + this.adresse + " Happy-Hour : " + this.debHappyH + " - " + this.finHappyH + " heures" +"\n" + "Site Web: " + this.siteWeb},
        //title: "Son nom: <br>"+this.nom,
        //}))
        this.markers.push(new MarkerWithLabel({
          position: { lat: Number(this.splitted_loc[0]), lng: Number(this.splitted_loc[1]) },
          labelContent: "Adresse : " + this.adresse + " Happy-Hour :" + this.debHappyH + " - " + this.finHappyH + " heures" + "\n" + "Site Web: " + this.siteWeb,
          title: this.nom,
        }))
        //console.log("site", this.siteWeb);
      }
      //console.log(this.nom_bars);
      //console.log(this.localisation_bars_str);
      //console.log(this.markers)
    }, err => {
      console.log(err);
    })
  }

  openInfo(marker: MapMarker, title: string, descri: string) {
    this.NomBar = title
    this.DescriptionBar = descri
    this.info.open(marker)
  }

  getOption() {
    this.selectElement = document.querySelector("#selectedFilter")
    this.selectFilter = this.selectElement.options[this.selectElement.selectedIndex].value
    console.log(this.selectFilter)
  }

  updateMapLoc(str: String){
    this.markers =[]
    this.http.get("http://localhost:8086/bar/adresse/" + str).subscribe(data => {
      this.bars = data;
      console.log(this.bars);
      let liste_bars = this.bars;
      this.getLengthBar(liste_bars)
      this.updateMapMarkers(liste_bars)
      // for (var i = 0; i < Object.keys(liste_bars).length; i++) {
      //   //this.nom_bars.push(Object.values(liste_bars)[i].nom)
      //   //this.localisation_bars_str.push(Object.values(liste_bars)[i].localisation);
      //   this.nom = Object.values(liste_bars)[i].nom;
      //   this.adresse = Object.values(liste_bars)[i].adresse;
      //   this.debHappyH = Object.values(liste_bars)[i].deb_happ;
      //   this.finHappyH = Object.values(liste_bars)[i].fin_happ;
      //   this.siteWeb = Object.values(liste_bars)[i].siteWeb;
      //   this.localisation_str = Object.values(liste_bars)[i].localisation;
      //   this.splitted_loc = this.localisation_str.split(",", 2);
      //   //this.markers.push(new google.maps.Marker({
      //   //position: {lat: Number(this.splitted_loc[0]), lng: Number(this.splitted_loc[1])},
      //   //label: {color: 'red', text: "Adresse : " + this.adresse + " Happy-Hour : " + this.debHappyH + " - " + this.finHappyH + " heures" +"\n" + "Site Web: " + this.siteWeb},
      //   //title: "Son nom: <br>"+this.nom,
      //   //}))
      //   this.markers.push(new MarkerWithLabel({
      //     position: { lat: Number(this.splitted_loc[0]), lng: Number(this.splitted_loc[1]) },
      //     labelContent: "Adresse : " + this.adresse + " Happy-Hour :" + this.debHappyH + " - " + this.finHappyH + " heures" + "\n" + "Site Web: " + this.siteWeb,
      //     title: 'Son nom: <br/>' + this.nom,
      //   }))
      //   console.log("site", this.siteWeb);
      //   console.log("site", this.markers);
      // }
      //console.log(this.nom_bars);
      //console.log(this.localisation_bars_str);
      //console.log(this.markers)
    }, err => {
      console.log(err);
    })
  }

  updateMapNomBiere(str: String){
    this.markers =[]
    this.http.get("http://localhost:8086/bar/biere/nom/"+ str).subscribe(data => {
      this.bars = data;
      console.log(this.bars);
      let liste_bars = this.bars;
      this.getLengthBar(liste_bars)
      this.updateMapMarkers(liste_bars)
    }, err => {
      console.log(err);
    })
  }

  updateMapPrix(str: String){
    this.markers =[]
    this.http.get("http://localhost:8086/bar/prix/"+ str).subscribe(data => {
      this.bars = data;
      console.log(this.bars);
      let liste_bars = this.bars;
      this.getLengthBar(liste_bars)
      this.updateMapMarkers(liste_bars)
    }, err => {
      console.log(err);
    })
  }

  updateMapStyle(str: String){
    this.markers =[]
    this.http.get("http://localhost:8086/bar/prix/"+ str).subscribe(data => {
      this.bars = data;
      console.log(this.bars);
      let liste_bars = this.bars;
      this.getLengthBar(liste_bars)
      this.updateMapMarkers(liste_bars)
    }, err => {
      console.log(err);
    })
  }

  updateMapMarkers(liste: object){
    for (var i = 0; i < Object.keys(liste).length; i++) {
      this.nom = Object.values(liste)[i].nom;
      this.adresse = Object.values(liste)[i].adresse;
      this.debHappyH = Object.values(liste)[i].debHapp;
      this.finHappyH = Object.values(liste)[i].finHapp;
      console.log(this.finHappyH)
      this.siteWeb = Object.values(liste)[i].siteWeb;
      this.localisation_str = Object.values(liste)[i].localisation;
      this.splitted_loc = this.localisation_str.split(",", 2);
      this.markers.push(new MarkerWithLabel({
        position: { lat: Number(this.splitted_loc[0]), lng: Number(this.splitted_loc[1]) },
        labelContent: "Adresse : " + this.adresse + " Happy-Hour :" + this.debHappyH + " - " + this.finHappyH + " heures" + "\n" + "Site Web: " + this.siteWeb,
        title: 'Son nom: <br/>' + this.nom,
      }))
      console.log("site", this.siteWeb);
      console.log("site", this.markers);
    }
  }

  getLengthBar(liste:object){
    this.nbBarsFiltres = Object.keys(liste).length
  }

  // Pagination parameters.
  p: number = 1;
  count: number = 3;

}
