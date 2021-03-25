
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnecteService {
  status:number = 0 ;  //statut de la personne connectée
  connexion:boolean = false ; //personne connecté?
  token:string = "";

 constructor() { }
}
