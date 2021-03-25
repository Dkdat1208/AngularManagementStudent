import { Component, OnInit } from '@angular/core';
import { Profil} from 'src/app/modele/profil';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
 // etudiant:ProfilI = <ProfilI>{};
  etudiant = new Profil();

  constructor() { }

  ngOnInit(): void {
   // this.etudiant = new Profil();
    this.etudiant = <Profil>{};
  }
  majEtudiant(){

  }
  
  annuleMaj(){
    this.etudiant = <Profil>{};
  }
}
