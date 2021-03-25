import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/internal/operators';
import { ConnecteService } from './connecte.service';
import { Router } from '@angular/router';

@Injectable()
export class E401Interceptor implements HttpInterceptor {

  constructor(private connectServ:ConnecteService , private route:Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
    .pipe(
     catchError(
       (erreur)  => {
        if(erreur instanceof HttpErrorResponse && erreur.status == 401){   
            this.connectServ.statut = 0;
            this.connectServ.connexion = false;
            this.connectServ.token = "";
            this.route.navigateByUrl('/connexion');
      };
      return erreur;
    }
    )) as any;
   
  }
}
