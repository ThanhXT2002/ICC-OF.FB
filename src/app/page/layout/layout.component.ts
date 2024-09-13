import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterModule,
    HeaderComponent,
    RouterOutlet
],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
