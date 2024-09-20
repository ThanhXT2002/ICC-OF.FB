import { Component,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { DragToggleComponent } from '../components/drag-toggle/drag-toggle.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FeatbackComponent } from "../components/featback/featback.component";


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    DragToggleComponent,
    FormsModule,
    CommonModule,
    FeatbackComponent
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
    // when window width is >= 640px
    480: {
      slidesPerView: 2,
    },
    // when window width is >= 768
    768: {
      slidesPerView: 3,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 5,
    }
  };

}
