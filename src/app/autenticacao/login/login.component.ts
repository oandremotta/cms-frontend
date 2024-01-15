import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { LocalStorageService } from '../../../services/local-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TenantService } from '../../../services/tenant.service';
import { Tenant } from '../../../models/tenant';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {

  public tenant: Tenant = new Tenant();

  constructor(
    // private autenticacaoService: AutenticacaoService, 
    private localStorage: LocalStorageService,
    private router: Router,
    private route: ActivatedRoute,
    private tenantService: TenantService,
  ) { }

  ngOnInit(): void { }


  public autenticarUsuario() {
    // this.obterTenant();

    // this.router.navigate([this.tenant.codigo, 'login', 'primeiro_acesso']);

    this.router.navigate([this.tenant.codigo]);

    // this.tenant != undefined ? this.dadosAutenticacao.tenant = this.tenant.id : this.dadosAutenticacao.tenant = 1;
    // this.autenticacaoService.autenticar(this.dadosAutenticacao)
    //   .subscribe(response => {
    //     this.localStorage.setObject(
    //       'usuarioAtual', response
    //     );
    //     let usuario = response;
    //     if (usuario.primeiroAcesso) {
    //       if (this.tenant) {
    //         this.router.navigate([this.tenant.codigo, 'login', 'primeiro_acesso']);
    //       } else {
    //         this.router.navigate(['login', 'primeiro_acesso']);
    //       }
    //     } else {
    //       this.router.navigate([this.tenant.codigo]);
    //     }

    //   },
    //     error => this.error = new Error(error)
    //   );
  }

  private obterTenant() {
    this.tenant = this.tenantService.tenantAtual()
  }
}
