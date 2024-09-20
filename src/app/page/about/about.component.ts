import { Component,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { DragToggleComponent } from '../components/drag-toggle/drag-toggle.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FeatbackComponent } from "../components/featback/featback.component";
import { BtnDiscoveryComponent } from '../components/btn-discovery/btn-discovery.component';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    DragToggleComponent,
    FormsModule,
    CommonModule,
    FeatbackComponent,
    BtnDiscoveryComponent
],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AboutComponent {
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

  breakpoints = {
    // Kích thước màn hình nhỏ hơn 640px (sm - mobile)
    320: {
      slidesPerView: 2, // Hiển thị 2 slide
    },
    // Kích thước màn hình nhỏ hơn 768px (md - tablet)
    768: {
      slidesPerView: 3, // Hiển thị 3 slide
    },
    // Kích thước màn hình nhỏ hơn 1024px (lg - laptop)
    1024: {
      slidesPerView: 5, // Hiển thị 5 slide
    },
  };

}
