import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AboutComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
