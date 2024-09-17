import { Component, OnInit, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProductIccService } from '../../core/service/product.service';
import { IProduct } from '../../core/interface/product.interface';
import { ProductMenuComponent } from "../components/product-menu/product-menu.component";
import { SanitizeHtmlPipe } from '../../core/pipe/sanitize-html.pipe';
import { CommonModule } from '@angular/common';


export type MenuItemHeader = {
  label: string;
  route?:string;
  icon?:string;
}

@Component({
  selector: 'app-discovery',
  standalone: true,
  imports: [
    RouterModule,
    ProductMenuComponent,
    SanitizeHtmlPipe,
    CommonModule
],
  templateUrl: './discovery.component.html',
  styleUrl: './discovery.component.scss'
})
export class DiscoveryComponent implements OnInit {

  products: IProduct[] = [];
  selectedProduct: IProduct | null = null;

  constructor(
    private router: Router,
    private productService: ProductIccService,
  ){}

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

  showProductDetails(product: IProduct) {
    this.selectedProduct = product;
  }

  hideProductDetails() {
    this.selectedProduct = null;
  }

  navigateToProduct(slug: string) {
    this.router.navigate(['/product', slug]);
  }

}
