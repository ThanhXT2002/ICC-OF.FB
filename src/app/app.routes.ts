import { AboutComponent } from './page/about/about.component';
import { DiscoveryComponent } from './page/discovery/discovery.component';
import { HomeComponent } from './page/home/home.component';
import { LayoutComponent } from './page/layout/layout.component';
import { Routes } from '@angular/router';
import { ProductComponent } from './page/product/product.component';

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
      { path: 'discovery', component: DiscoveryComponent },
      { path: 'product/:slug', component: ProductComponent },
    ],
  },
];
