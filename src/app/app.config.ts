import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient,withFetch, withInterceptors } from '@angular/common/http';
import { authHeaderInterceptor } from '../app/interceptors/auth-header-interceptor.service';
import { CookieService } from 'ngx-cookie-service';
import { provideStore } from '@ngrx/store';
import { textReducer } from './shared/state/text.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    importProvidersFrom(),
    provideHttpClient(withInterceptors([authHeaderInterceptor]) // Register the interceptor function here
    ),
    CookieService, // Register CookieService so it can be injected into the interceptor
    provideRouter(routes), // Provide the router with routes
    provideStore({text: textReducer}), // here provide the store for the root component
  ]
};


