import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-produto-secao',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './listar-produto-secao.component.html',
  styleUrl: './listar-produto-secao.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListarProdutoSecaoComponent implements OnInit {

  ngOnInit(): void { }

}
