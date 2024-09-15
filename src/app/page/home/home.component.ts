import { Component,} from '@angular/core';
import { DragToggleComponent } from '../components/drag-toggle/drag-toggle.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    DragToggleComponent,
    FormsModule,
    CommonModule

  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent  {
  toggleValue = false;

  constructor(private router: Router) {}

  onDragEnd(isChecked: boolean) {
    if (isChecked) {
      this.navigateToDiscovery();
    }
  }

  navigateToDiscovery() {
    setTimeout(() => {
      this.router.navigate(['/discovery']);
    }, 300);
  }

}
