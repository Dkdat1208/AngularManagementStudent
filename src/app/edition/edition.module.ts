import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EditionRoutingModule} from './edition-routing.module';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { AccueilComponent } from  './accueil/accueil.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AccueilComponent,EtudiantComponent,UtilisateursComponent],
  imports: [
    CommonModule,
    EditionRoutingModule,
    FormsModule
  ]
})
export class EditionModule { }
