// // import { Injectable } from '@angular/core';
// // import { HttpEvent, HttpInterceptor,HttpHandler,HttpRequest } from '@angular/common/http';
// // import { Observable } from 'rxjs';
// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class AuthHeaderInterceptorService implements HttpInterceptor {
// //       intercept(req:HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>>{
// //         const organisationId = 'nintriva';
// //         document.cookie = `organisationId=${organisationId}; path=/;`;

// //         const clonedRequest = req.clone({
// //           setHeaders: {
// //             'org-id' : organisationId,
// //           }
// //         });
// //         return next.handle(clonedRequest);
// //       }
// //       constructor() { }
// //     }
  

// import { HttpHandler, HttpInterceptor, HttpRequest, HttpResponse,HttpInterceptorFn } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { inject } from '@angular/core';
// import { CookieService } from 'ngx-cookie-service'; 

// export function authHeaderInterceptor(
//   req: HttpRequest<any>, 
//   next: HttpHandler
// ): Observable<any> {
//   const cookieService = inject(CookieService);  // Inject CookieService

//   const organizationId = 'nintriva'; // Retrieve organization ID

//   // Set organization ID cookie
//   cookieService.set('organizationId', organizationId, { path: '/' });

//   // Clone the request and add the custom header
//   const clonedRequest = req.clone({
//     setHeaders: {
//       'org-id': organizationId,
//     }
//   });

//   return next.handle(clonedRequest);
// }

import { inject } from '@angular/core';
import { HttpRequest, HttpHandlerFn, HttpInterceptorFn } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service'; 
import { Observable } from 'rxjs';
import { LoginService } from './../../app/pages/login/login.service';

export const authHeaderInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>, 
  next: HttpHandlerFn
): Observable<any> => {
  const cookieService = inject(CookieService);  // Inject the CookieService
  const organizationId = 'nintriva'; 
  const accessToken= cookieService.get('access_token');
  // Set the organization ID in the cookie
  cookieService.set('organizationId', organizationId, { path: '/' });
if(req.url.includes('login')){
  const clonedRequest = req.clone({
    setHeaders: {
      'org-id': organizationId,
      'unit-id':'default'
    },
  });
  // Proceed with the cloned request using the next function (HttpHandlerFn)
  return next(clonedRequest);

}
else{
  if(accessToken){
    const clonedRequest = req.clone({
      setHeaders:{
        Authorization: `Bearer ${accessToken}`  
      }
    });
    return next(clonedRequest);  // Return the modified request with the Authorization header

  }
}
return next(req)
};
