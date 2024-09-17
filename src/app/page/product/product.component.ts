import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../core/interface/product.interface';
import { ProductIccService } from '../../core/service/product.service';
import { SanitizeHtmlPipe } from '../../core/pipe/sanitize-html.pipe';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductMenuComponent } from "../components/product-menu/product-menu.component";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    SanitizeHtmlPipe,
    RouterModule,
    ProductMenuComponent
],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent  {
  product: IProduct | null = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductIccService,
  ){

  }

  ngOnInit(): void {

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


}
