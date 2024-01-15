import { Route } from "@angular/router";
import { ProdutoSecaoComponent } from "./produto-secao.component";
import { ListarProdutoSecaoComponent } from "./listar-produto-secao/listar-produto-secao.component";
import { ManterProdutoSecaoComponent } from "./manter-produto-secao/manter-produto-secao.component";



export const PRODUTO_SECAO_ROUTES: Route[] = [
  {
    path: '',
    // pathMatch: 'prefix',
    component: ProdutoSecaoComponent,
    children: [
      { path: 'listar', component: ListarProdutoSecaoComponent },
      { path: 'manter', component: ManterProdutoSecaoComponent }
    ],
  }];