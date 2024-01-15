import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { LocalStorageService } from './local-storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tenant } from '../models/tenant';
import { CookieService } from 'ngx-cookie-service';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class FuncionalidadeService {

    public API_URL: string = environment.apiUrl;
    private httpOptions = {
        headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };

    constructor(private localStorage: LocalStorageService,
        private cookieService: CookieService, private http: HttpClient) { }

    public listarFuncionalidades(): Observable<any> {
        return this.http.get(`${this.API_URL}funcionalidades`, this.httpOptions);
    }
}