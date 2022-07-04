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
import { GestionavisComponent } from './gestionavis/gestionavis.component';
import { GestionbarComponent } from './gestionbar/gestionbar.component';
import { GestionbiereComponent } from './gestionbiere/gestionbiere.component';
import { GestiongroupeComponent } from './gestiongroupe/gestiongroupe.component';
import { GestionuserComponent } from './gestionuser/gestionuser.component';
import { CreationuserComponent } from './creationuser/creationuser.component';

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
  {path: 'gestionavis', component: GestionavisComponent},
  {path: 'gestionbar', component: GestionbarComponent},
  {path: 'gestiongroupe', component: GestiongroupeComponent},
  {path: 'gestionuser', component: GestionuserComponent},
  {path: 'gestionbiere', component: GestionbiereComponent},
  {path: 'creationUser', component: CreationuserComponent},
  {path: 'editUser/:id_user', component: CreationuserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
