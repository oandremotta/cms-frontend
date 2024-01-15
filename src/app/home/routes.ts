import { Route } from "@angular/router";
import { HomeComponent } from "./home.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { ProdutoSecaoComponent } from "../produto-secao/produto-secao.component";


export const HOME_ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'prefix',
    component: HomeComponent,
    children: [
      { path: '', component: DashboardComponent },
      // { path: ':tenantCodigo', loadChildren: () => import('./home/routes').then(mod => mod.HOME_ROUTES) },
      { path: 'modulo/:idModulo/secao', loadChildren: () => import('../produto-secao/routes').then(mod => mod.PRODUTO_SECAO_ROUTES) },
    ],
  }];