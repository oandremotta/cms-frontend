import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent implements OnInit {

  isPortalAlunoOpen: boolean = false;
  isPortalComunidadeOpen: boolean = false;

  ngOnInit(): void {

  }

  togglePortal(portalId: string): void {
    this.isPortalAlunoOpen = !this.isPortalAlunoOpen;
  }

  sair() {

  }
}
