import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-visualizar-dados',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './visualizar-dados.component.html',
  styleUrl: './visualizar-dados.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VisualizarDadosComponent implements OnInit {

  ngOnInit(): void { }

}
