import { Component } from '@angular/core';
import { IProduct } from '../../../core/interface/product.interface';
import { Router, RouterModule } from '@angular/router';
import { ProductIccService } from '../../../core/service/product.service';
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
  products: IProduct[] = [];

  constructor(
    private productService: ProductIccService,
    private router: Router
  ){

  }

  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts() {
    this.productService.getAll().subscribe({
      next: (products) => {

        this.products = products;
      },
      error: (error) => {
        console.error('Lỗi khi lấy danh sách bài viết:', error);
      }
    });
  }
  navigateToProduct(slug: string) {
    this.router.navigate(['/product', slug]);
  }

  navigateBack() {
    this.router.navigate(['/discovery']);
  }
}
