import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { partitionArray } from '@angular/compiler/src/util';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { profile } from 'console';
import { ProfilI } from '../modele/profil';
import { EtudiantsService } from '../services/etudiants.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
  //indexId
    indexEtudiant:number=1;
  

 
  constructor(public servEtu:EtudiantsService,private routeParametres:ActivatedRoute) { }

  ngOnInit(): void {
    //console.log(this.servEtu.listeEtudiants);
    this.routeParametres.params.subscribe(
      parametres => {
        console.log("Parametres de la route",parametres);

        if(parametres['i']){
       this.indexEtudiant = + parametres['i'];
        }
      }
    )
  }

 

}
