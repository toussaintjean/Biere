import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreferenceComponent } from './preference/preference.component';
import { GroupeComponent } from './groupe/groupe.component';
import { RechercheComponent } from './recherche/recherche.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { BarnavComponent } from './barnav/barnav.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ConnexionbisComponent } from './connexionbis/connexionbis.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { MarkerWithLabel } from '@googlemaps/markerwithlabel';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter'
import { DropDownListAllModule
 } from '@syncfusion/ej2-angular-dropdowns';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    PreferenceComponent,
    GroupeComponent,
    RechercheComponent,
    InscriptionComponent,
    BarnavComponent,
    ConnexionbisComponent,
    TestComponent,
    HomeComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    GoogleMapsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    DropDownListAllModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
