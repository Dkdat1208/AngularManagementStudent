import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ContactComponent } from './contact/contact.component';
import { EditionGuard } from './edition.guard';
import { Erreur404Component } from './erreur404/erreur404.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { ListeEtudiantsComponent } from './liste-etudiants/liste-etudiants.component';

const routes: Routes = [
  {path:'' ,component:AccueilComponent},
  {path:'listEtudiant' ,component:ListeEtudiantsComponent,
    children:[
      {path:'',component:ListeEtudiantsComponent},
      {path:'etu',component:EtudiantComponent},

    ],
  },
  {path:'etudiant' ,component:EtudiantComponent},
  {path:'etudiant/:id' ,component:EtudiantComponent},
  {path:'etudiant/:nom/:index' ,component:EtudiantComponent},
  {path:'contact',component:ContactComponent},
  {path:'edition',loadChildren:()=>import('./edition/edition.module').then(e => e.EditionModule), canActivate:[EditionGuard]},
  {path:'connexion',component:ConnexionComponent},
  {path:'**',component:Erreur404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
