import { Router, RouterModule } from '@angular/router';
import { Component, signal, HostListener} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductIccService } from '../../core/service/product.service';
import { IProduct } from '../../core/interface/product.interface';


export type MenuItemHeader = {
  label: string;
  route?:string;
  icon?:string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule

  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMobileMenuOpen = signal(false);

  products: IProduct[] = [];

  constructor(
    private router: Router,
    private productService: ProductIccService,
  ){

  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(value => !value);
    // Hàm này thay đổi trạng thái của menu di động (mở hoặc đóng).
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
    // Hàm này đóng menu di động.
  }

  menuItem = signal<MenuItemHeader[]>([
    {

      label: "Bảo Hiểm TNDS BB Xe Máy",
      route: '/about',
      icon:'./assets/img/icon/icon_default.png'
    },
    {

      label: "Bảo Hiểm TNDS BB Ô Tô",
      route: '/home',
      icon:'./assets/img/icon/icon_default.png'
    },
    {

      label: "Bảo Hiểm Vật Chất Ô Tô",
      route: 'home',
      icon:'./assets/img/icon/icon_default.png'
    },
    {
      label: "Bảo Hiểm Tai Nạn Cá Nhân",
      route: 'home',
      icon:'./assets/img/icon/icon_default.png'
    },
    {
      label: "Bảo Hiểm Sức Khỏe",
      route: 'home',
      icon:'./assets/img/icon/icon_default.png'
    },
  ]);

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


}
