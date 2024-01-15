import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FuncionalidadeService } from '../../../services/funcionalidade.service';

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
  funcionalidades: any = [];

  ngOnInit(): void {
    this.getFuncionalidades();
  }

  constructor(private funcionalidadeService: FuncionalidadeService) { }

  onSwitchChange() {
    console.log(this.statusGeral);
  }

  getFuncionalidades() {
    this.funcionalidadeService.listarFuncionalidades().subscribe(
      {
        next: (value) => {
          this.funcionalidades = value;
        },
        error: (err) => {
          console.log(err);
        },
      }
    );
  }


}
