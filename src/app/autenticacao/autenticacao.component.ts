import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { LocalStorageService } from '../../services/local-storage.service';
import { TenantService } from '../../services/tenant.service';
import { Tenant } from '../../models/tenant';

@Component({
  selector: 'app-autenticacao',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet
  ],
  templateUrl: './autenticacao.component.html',
  styleUrl: './autenticacao.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutenticacaoComponent implements OnInit {
  public tenantCodigo!: string;
  private inscricao?: Subscription;
  public tenant?: Tenant;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tenantService: TenantService,
    // private localStorageService: LocalStorageService,
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
    // this.inscricao = this.route.params.subscribe(
    //   (params: any) => {
    //     this.tenantCodigo = params['tenantCodigo'];
    //     if (this.tenantCodigo) {
    //       this.obterTenant();
    //     }
    //   }
    // );
  }

  // private obterTenant() {    
  //   this.tenantService.getTenantPorCodigo(this.tenantCodigo)
  //     .subscribe(
  //       tenant => {
  //         if (tenant) {
  //           this.tenant = tenant;
  //           this.localStorageService.setObject("tenantAtual", this.tenant);
  //           this.cookieService.set("tenantAtual", this.tenant.nome);
  //         } else {
  //           this.router.navigate(['404']);
  //         }
  //       },

  //     );
  // }

}
