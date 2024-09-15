import { AboutComponent } from './page/about/about.component';
import { ProductComponent } from './page/components/product/product.component';
import { DiscoveryComponent } from './page/discovery/discovery.component';
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
      { path: 'discovery', component: DiscoveryComponent },
      { path: 'product/:id', component: ProductComponent },
    ],
  },
];
