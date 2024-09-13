import { AboutComponent } from './page/about/about.component';
import { HomeComponent } from './page/home/home.component';
import { LayoutComponent } from './page/layout/layout.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
    ],
  },
];
