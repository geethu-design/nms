
import { inject } from '@angular/core';
import { HttpRequest, HttpHandlerFn, HttpInterceptorFn } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service'; 
import { Observable } from 'rxjs';

export const authHeaderInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>, 
  next: HttpHandlerFn
): Observable<any> => {
  const cookieService = inject(CookieService);  // 
  // Inject the CookieService
  const organizationId = 'nintriva'; 
  const accessToken= cookieService.get('access_token');
  const refreshToken = cookieService.get('refresh_token');
  // Set the organization ID in the cookie
  cookieService.set('organizationId', organizationId, { 
    path: '/',
    expires:1,
    sameSite:'Lax',
    // secure:true
    secure: window.location.protocol === 'https:' 
   });
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
        Authorization: `Bearer ${accessToken }`,
        'org-id': organizationId,
        'unit-id':'default'   
      }
    });
    return next(clonedRequest);  // Return the modified request with the Authorization header

  }
  else {
    if(refreshToken){
      const clonedRequest =req.clone({
        setHeaders:{
          Authorization: `Bearer ${refreshToken}`,
          'org-id': organizationId,
          'unit-id':'default'   
  
        }
      });
      return next(clonedRequest);  // Return the modified request with the Authorization header

    }
  }
}
return next(req)
};
