import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  burguer = 'https://iconos8.es/icon/36138/hamburguesa';
  bunny = '../../assets/conejo.PNG';
  github = 'https://iconos8.es/icon/AZOZNnY73haj/github';
  lin = 'https://iconos8.es/icon/xuvGCOXi8Wyg/linkedin';
  cv = 'https://iconos8.es/icon/mgr6xm1Af5v3/abrir-curr%C3%ADculum';
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  downloadFile() {
    const cv = '../../assets/CristaldoCV.pdf';
    const link = document.createElement('a');
    link.href = cv;
    link.download = 'CristaldoCV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
