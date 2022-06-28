import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  inscription():void {
    this.route.navigateByUrl('recherche')
  }
}
