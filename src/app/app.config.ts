// import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
// import { provideRouter } from '@angular/router';

// import { routes } from './app.routes';
// import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
// import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// import { provideHttpClient,withFetch, withInterceptors } from '@angular/common/http';
// import { authHeaderInterceptor } from '../app/interceptors/auth-header-interceptor.service';
// import { CookieService } from 'ngx-cookie-service';
// import { provideStore } from '@ngrx/store';
// import { textReducer } from './shared/state/text.reducer';
// import { provideNativeDateAdapter } from '@angular/material/core';

// export const appConfig: ApplicationConfig = {
//   providers: [provideZoneChangeDetection({ eventCoalescing: true }),
//     provideClientHydration(withEventReplay()),
//     provideAnimationsAsync(),
//     provideHttpClient(withFetch()),
//     importProvidersFrom(),
//     provideHttpClient(withInterceptors([authHeaderInterceptor]) // Register the interceptor function here
//     ),
//     CookieService, // Register CookieService so it can be injected into the interceptor
//     provideRouter(routes), // Provide the router with routes
//     provideStore({text: textReducer}), 
//     provideNativeDateAdapter()
//     // here provide the store for the root component
//   ]
// };


import {
  ApplicationConfig,
  inject,
  APP_INITIALIZER,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import {
  provideAnimationsAsync,
} from '@angular/platform-browser/animations/async';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { authHeaderInterceptor } from '../app/interceptors/auth-header-interceptor.service';
import { CookieService } from 'ngx-cookie-service';
import { provideStore } from '@ngrx/store';
import { textReducer } from './shared/state/text.reducer';
import { provideNativeDateAdapter } from '@angular/material/core';

//APP_INITIALIZER factory to load cookies/tokens before bootstrap
export function initApp(cookieService: CookieService) {
  return () => {
    const access = cookieService.get('access_token');
    const refresh = cookieService.get('refresh_token');
    console.log('[APP_INITIALIZER] Loaded tokens from cookie:', {
      access,
      refresh,
    });
    return Promise.resolve();
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync(),

    provideHttpClient(
      withFetch(),
      withInterceptors([authHeaderInterceptor])
    ),

    CookieService,

    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      deps: [CookieService],
      multi: true,
    },

    provideRouter(routes),
    provideStore({ text: textReducer }),
    provideNativeDateAdapter(),
  ],
};
