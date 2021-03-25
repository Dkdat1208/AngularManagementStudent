import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  u:any =  {id:'', mdp:''};

  constructor(private authServ:AuthService) { }

  ngOnInit(): void { }

  OnsendConnect(){
    console.log(this.u);
    this.authServ.OnreceiveId(this.u);
  }


}
