import { Route } from "@angular/router";
import { AutenticacaoComponent } from "./autenticacao.component";
import { LoginComponent } from "./login/login.component";

export const AUTENTICACAO_ROUTES: Route[] = [{
  path: '',
  pathMatch: 'prefix',
  component: AutenticacaoComponent,
  children: [
    { path: '', component: LoginComponent },
  ],
}];