import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-alterar-senha',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './alterar-senha.component.html',
  styleUrl: './alterar-senha.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlterarSenhaComponent implements OnInit {

  ngOnInit(): void { }

}
