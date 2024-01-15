import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { LocalStorageService } from './local-storage.service';
import { HttpClient } from '@angular/common/http';
import { Tenant } from '../models/tenant';
import { CookieService } from 'ngx-cookie-service';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TenantService {

  public API_URL: string = environment.apiUrl;

  constructor(private localStorage: LocalStorageService,
    private cookieService: CookieService, private http: HttpClient) { }

  public tenantAtual(): Tenant {
    let tenant = this.localStorage.get('tenantAtual') as Tenant;
    if (!tenant) {
      tenant = this.cookieService.get('tenantAtual') as unknown as Tenant;
    }
    return tenant;
  }

  public getTenants(): Observable<Array<Tenant>> {
    return this.http.get<Array<Tenant>>(this.API_URL + "tenants")
      .pipe(
        catchError(this.handleError)
      );
  }

  public getTenantPorCodigo(tenantCodigo: string): Observable<Tenant> {
    return this.http.get<Tenant>(this.API_URL + "tenants/" + tenantCodigo)
      .pipe(
        catchError(this.handleError)
      );
  }

  public obterTenantPorId(id: number): Observable<Tenant> {
    return this.http.get<Tenant>(`${this.API_URL}tenants/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  public getApi(): string {
    return this.API_URL;
  }

  private handleError(error: any): Observable<never> {
    console.error('Erro na requisição:', error);
    return throwError(error);
  }
}
