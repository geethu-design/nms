import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor,HttpHandler,HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthHeaderInterceptorService implements HttpInterceptor {
      intercept(req:HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>>{
        const organisationId = 'nintriva';
        document.cookie = `organisationId=${organisationId}; path=/;`;

        const clonedRequest = req.clone({
          setHeaders: {
            'X-OrganisationId' : organisationId,
          }
        });
        return next.handle(clonedRequest);
      }
      constructor() { }
    }
  

