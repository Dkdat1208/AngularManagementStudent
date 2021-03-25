import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProfilI } from '../modele/profil';
import { ConnecteService } from './connecte.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  profil:ProfilI= <ProfilI>{};

  constructor(private http:HttpClient , private connectServ:ConnecteService) { }


  OnreceiveId(connexion:{id:any ; mdp:string}){
    this.http
    .get<ProfilI>(`assets/ids/${connexion.id}@${connexion.mdp}.json`)
    .subscribe(
      (data) => {
        console.log(data);
      this.connectServ.connexion =true;
      if(data['statut']) this.connectServ.status = data['statut'];
      if(data['token']) this.connectServ.token = data['token'];
      this.profil = data ;
    
  },

  erreur => {
    console.log(erreur);
    this.connectServ.connexion = false;
    this.connectServ.status = 0;
    this.profil = <ProfilI> {} ;
  }
    )
}
}