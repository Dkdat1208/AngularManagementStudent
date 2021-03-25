export interface ProfilI {
    _id?:number | string;
    nom:string;
    prenom:string;
    specialite:Array<string>;
    promo:string;
    mail?:string;
    age:number;
    photo?:string;
    statut?:number;
    token?:string;


}

export class Profil implements ProfilI{ 

    _id?=0;
    nom="";
    prenom="";
    specialite=[];
    promo="";
    mail="";
    age=0;
    photo="";
    statut=0;
    token="";
}
