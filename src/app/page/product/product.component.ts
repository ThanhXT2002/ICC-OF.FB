import { Component, HostListener, Inject, OnInit,PLATFORM_ID } from '@angular/core';
import { IProduct } from '../../core/interface/product.interface';
import { ProductIccService } from '../../core/service/product.service';
import { SanitizeHtmlPipe } from '../../core/pipe/sanitize-html.pipe';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductMenuComponent } from "../components/product-menu/product-menu.component";
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    SanitizeHtmlPipe,
    RouterModule,
    ProductMenuComponent,
    CommonModule
],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  product: IProduct | null = null;
  products: IProduct[] = [];

  isLgScreen: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductIccService,
    @Inject(PLATFORM_ID) private platformId: Object
  ){

  }

  ngOnInit(): void {
    this.checkScreenSize()
    this.getAllProducts()
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      if (slug) {
        this.loadProduct(slug);
      }
    });
  }

  loadProduct(slug: string) {
    this.productService.getProductBySlug(slug).subscribe({
      next: (product) => {
        this.product = product;
      },
      error: (error) => {
        console.error('Error loading product:', error);
      }
    });
  }

  navigateToProduct(slug: string) {
    this.router.navigate(['/product', slug]);
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
