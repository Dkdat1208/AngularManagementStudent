import { Component, OnInit } from '@angular/core';

import {ProfilI } from "../modele/profil";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  listeEtudiants:Array<ProfilI>=[]; //profilI
  
  constructor() { }

  ngOnInit(): void {
    //peuplement  de la variable 
    /**
     *  this.listeEtudiants = [
      {
        "nom":"Deogracia",
        "prenom":"patrick",
        "promo":"ING3/ICC",
        "specialite":["plein"],
        "mail":"diloukounk@eisti.fr",
        "age": 23,
        "photo":"/assets/img/img1.jpeg"
        
      },

      {
        "nom":"hugo",
        "prenom":"blin",
        "promo":"ING3/ICC",
        "specialite":["plein"],
        "mail":"hb@eisti.fr",
        "age": 20,
        "photo":"/assets/img/img2.png"
        
      }

    ]
     */
   

  }

 
}
