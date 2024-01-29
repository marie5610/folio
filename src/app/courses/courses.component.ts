import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  cursitos: string[] = [
    '../../assets/html.PNG',
    '../../assets/responsive.PNG',
    '../../assets/js.PNG',
    '../../assets/node.PNG',
    '../../assets/componentesAngular.PNG',
    '../../assets/fundamentosAngular.PNG',
    '../../assets/nest.PNG',
    '../../assets/auth.PNG',
    '../../assets/modulos.PNG',
    '../../assets/typeorm.PNG',
  ];
}
