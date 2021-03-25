import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ConnecteService } from './services/connecte.service';

@Injectable({
  providedIn: 'root'
})
export class EditionGuard implements CanActivate, CanLoad {

  constructor(private connectServ:ConnecteService){}
  //autorise des liens de routerLInk
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.connectServ.connexion;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.connectServ.status > 0;
  }
}
