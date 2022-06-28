import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { PreferenceComponent } from './preference/preference.component';
import { GroupeComponent } from './groupe/groupe.component';
import { RechercheComponent } from './recherche/recherche.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { BarnavComponent } from './barnav/barnav.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    PreferenceComponent,
    GroupeComponent,
    RechercheComponent,
    InscriptionComponent,
    BarnavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
