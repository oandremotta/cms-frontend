import { CommonModule, PlatformLocation } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-nao-encontrada',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './pagina-nao-encontrada.component.html',
  styleUrl: './pagina-nao-encontrada.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginaNaoEncontradaComponent {

  constructor
    (
      private location: PlatformLocation,      
    ) {
    this.location.onPopState(() => {
      this.location.back();
    });

  }
}
