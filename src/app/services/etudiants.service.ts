import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProfilI } from '../modele/profil';

@Injectable({
  providedIn: 'root'
})
export class EtudiantsService {
  listeEtudiants:Array<ProfilI> = [];

  constructor(private http:HttpClient) { 
    this.http.get<Array<ProfilI>>('/assets/data/etudiants.json').subscribe(
      data => {
        console.log(data);
        this.listeEtudiants = data;
      }
    );
    
    
     
}

updatEtudiant(index: number, profil: ProfilI): void {
  this.listeEtudiants[index] = profil;
}
}
