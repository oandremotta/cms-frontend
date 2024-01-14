import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { LocalStorageService } from '../services/local-storage.service';
import { TenantService } from '../services/tenant.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), LocalStorageService, TenantService, CookieService, provideHttpClient(withFetch())]
};
