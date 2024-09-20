import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../../core/interface/product.interface';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product-menu',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './product-menu.component.html',
  styleUrl: './product-menu.component.scss'
})
export class ProductMenuComponent {
  @Input() products: IProduct[] = [];
  @Output() productHover = new EventEmitter<IProduct>();
  @Output() productLeave = new EventEmitter<void>();
  @Output() productClick = new EventEmitter<string>();

  onProductHover(product: IProduct) {
    this.productHover.emit(product);
  }

  onProductLeave() {
    this.productLeave.emit();
  }

  onProductClick(slug: string) {
    this.productClick.emit(slug);
  }
}
