import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-produto-secao',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet
  ],
  templateUrl: './produto-secao.component.html',
  styleUrl: './produto-secao.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProdutoSecaoComponent implements OnInit {

  ngOnInit(): void { }

}
