import { Component, OnInit, signal,PLATFORM_ID, Inject, HostListener  } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProductIccService } from '../../core/service/product.service';
import { IProduct } from '../../core/interface/product.interface';
import { ProductMenuComponent } from "../components/product-menu/product-menu.component";
import { SanitizeHtmlPipe } from '../../core/pipe/sanitize-html.pipe';
import { CommonModule,isPlatformBrowser  } from '@angular/common';


@Component({
  selector: 'app-discovery',
  standalone: true,
  imports: [
    RouterModule,
    SanitizeHtmlPipe,
    CommonModule,
    ProductMenuComponent
],
  templateUrl: './discovery.component.html',
  styleUrl: './discovery.component.scss'
})
export class DiscoveryComponent implements OnInit {

  products: IProduct[] = [];
  selectedProduct: IProduct | null = null;

  isLgScreen: boolean = false;

  constructor(
    private router: Router,
    private productService: ProductIccService,
    @Inject(PLATFORM_ID) private platformId: Object
  ){}

  ngOnInit(): void {
    this.getAllProducts()
    this.checkScreenSize()
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

  // Sử dụng HostListener để lắng nghe sự kiện resize
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    if (isPlatformBrowser(this.platformId)) {
      // Chỉ thực hiện khi đang ở môi trường trình duyệt (client-side)
      this.isLgScreen = window.innerWidth >= 1024; // Theo Tailwind, lg là >= 1024px
    }
  }

}
