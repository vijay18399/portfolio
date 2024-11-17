import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { routes } from './app.routes';
import { SpellBeeEffects } from './store/effects';
import { spellBeeReducer } from './store/reducers';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({ spellBee: spellBeeReducer }),
    provideEffects([SpellBeeEffects]),
    provideHttpClient(), provideAnimationsAsync()
  ]
};
