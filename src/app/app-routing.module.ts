import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { GroupeComponent } from './groupe/groupe.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { PreferenceComponent } from './preference/preference.component';
import { RechercheComponent } from './recherche/recherche.component';

const routes: Routes = [
  {path:'connexion',component: ConnexionComponent},
  {path:'preference',component: PreferenceComponent},
  {path:'groupe',component: GroupeComponent},
  {path:'recherche',component: RechercheComponent},
  {path:'inscription',component: InscriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
