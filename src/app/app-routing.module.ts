import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { BarnavComponent } from './barnav/barnav.component';
import { GroupeComponent } from './groupe/groupe.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { PreferenceComponent } from './preference/preference.component';
import { RechercheComponent } from './recherche/recherche.component';
import { ConnexionbisComponent } from './connexionbis/connexionbis.component';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'connexionbis', component: ConnexionbisComponent},
  {path:'preference',component: PreferenceComponent},
  {path:'groupe',component: GroupeComponent},
  {path:'recherche',component: RechercheComponent},
  {path:'inscription',component: InscriptionComponent},
 // {path:'barnav',component: BarnavComponent},
  {path:'**',redirectTo: "home",  pathMatch: 'full'},
  {path: 'test', component:TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
