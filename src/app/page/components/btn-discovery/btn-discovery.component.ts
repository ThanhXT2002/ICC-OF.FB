import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DragToggleComponent } from '../drag-toggle/drag-toggle.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-btn-discovery',
  standalone: true,
  imports: [
    DragToggleComponent,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './btn-discovery.component.html',
  styleUrl: './btn-discovery.component.scss'
})
export class BtnDiscoveryComponent {
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
