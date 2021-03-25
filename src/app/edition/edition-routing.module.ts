import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { AccueilComponent} from './accueil/accueil.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';

const routes: Routes = [
  { 
  path:'',
  component:AccueilComponent,
  children: [
    { path: 'etudiant',component: EtudiantComponent},
    { path: 'utilisateurs',component: UtilisateursComponent},

  ],
 },  
  ];
 

@NgModule({
  imports: [RouterModule.forChild(routes) ],
  exports: [RouterModule]
  
})
export class EditionRoutingModule { }
