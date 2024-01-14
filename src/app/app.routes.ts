import { Routes } from '@angular/router';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

export const routes: Routes = [
  // {path: '', loadChildren: () => import('./autenticacao/routes')},
  { path: 'login', loadChildren: () => import('./autenticacao/routes').then(mod => mod.AUTENTICACAO_ROUTES) },
  { path: '404', component: PaginaNaoEncontradaComponent },
];
