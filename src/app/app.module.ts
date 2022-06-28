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
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
