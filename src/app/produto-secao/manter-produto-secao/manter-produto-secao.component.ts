import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Signal, type OnInit, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FuncionalidadeService } from '../../../services/funcionalidade.service';
import { FormService } from '../../../services/form.service';
// import { toObservable, toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-manter-produto-secao',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './manter-produto-secao.component.html',
  styleUrl: './manter-produto-secao.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManterProdutoSecaoComponent implements OnInit {

  statusGeral = false;
  dadosDaCrianca: any;
  funcionalidades: any = [];
  isLoading = false;

  ngOnInit(): void {
    this.getFuncionalidades();
    this.getDadosDaCrianca();
  }

  constructor(private funcionalidadeService: FuncionalidadeService, private formService: FormService, private ref: ChangeDetectorRef) { }

  onSwitchChange() {
    console.log(this.statusGeral);
  }

  getFuncionalidades() {
    this.isLoading = true;
    this.funcionalidadeService.listarFuncionalidades().subscribe({
      next: (data) => {
        this.funcionalidades = data;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.isLoading = false;
        this.ref.markForCheck();
      }
    })
  }

  getDadosDaCrianca() {
    this.formService.obterDadosDaCrianca().subscribe({
      next: (data) => {
        this.dadosDaCrianca = data;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
