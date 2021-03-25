import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'; 
import{ FormsModule} from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PiedComponent } from './pied/pied.component';
import { MenuComponent } from './menu/menu.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { Erreur404Component } from './erreur404/erreur404.component';
import { ContactComponent } from './contact/contact.component';
import { ListeEtudiantsComponent } from './liste-etudiants/liste-etudiants.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { EtudiantsService } from './services/etudiants.service';
import { AuthInterceptor } from './services/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    PiedComponent,
    MenuComponent,
    EtudiantComponent,
    Erreur404Component,
    ContactComponent,
    ListeEtudiantsComponent,
    ConnexionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ EtudiantsService,{ provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
