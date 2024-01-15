import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-manter-produto-secao',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './manter-produto-secao.component.html',
  styleUrl: './manter-produto-secao.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManterProdutoSecaoComponent implements OnInit {

  ngOnInit(): void { }

}
