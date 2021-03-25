import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

    contact:any;
  constructor() { }

  ngOnInit(): void {
    this.contact ={
      nom:'',
      email:'',
      subject:'',
      message:''
    }
  }
  suiviInput(){
    console.log(this.contact);
  }

  soumissionFormulaire (f:NgForm){
    console.log("donnée envoyé",f);
  }
  

}
