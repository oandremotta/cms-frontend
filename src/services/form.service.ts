import { Injectable, Signal } from '@angular/core';
import { environment } from '../environments/environment';
import { LocalStorageService } from './local-storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tenant } from '../models/tenant';
import { CookieService } from 'ngx-cookie-service';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';


@Injectable({
    providedIn: 'root'
})
export class FormService {

    public API_URL: string = environment.apiUrl;
    private httpOptions = {
        headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };

    constructor(private localStorage: LocalStorageService,
        private cookieService: CookieService, private http: HttpClient) { }

    public obterDadosDaCrianca(): Observable<any> {
        return this.http.get(`${this.API_URL}app/dados-da-crianca/1`, this.httpOptions);
    }
}