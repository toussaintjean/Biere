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
import { NavAdminComponent } from './nav-admin/nav-admin.component';
import { GestionavisComponent } from './gestionavis/gestionavis.component';
import { CreationBiereComponent } from './creation-biere/creation-biere.component';
import { CrationBarComponent } from './cration-bar/cration-bar.component';
import { CrationuserComponent } from './crationuser/crationuser.component';
import { CreationuserComponent } from './creationuser/creationuser.component';
import { GestionbarComponent } from './gestionbar/gestionbar.component';
import { GestionbiereComponent } from './gestionbiere/gestionbiere.component';
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
    NavAdminComponent,
    GestionavisComponent,
    CreationBiereComponent,
    CrationBarComponent,
    CrationuserComponent,
    CreationuserComponent,
    GestionbarComponent,
    GestionbiereComponent
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
