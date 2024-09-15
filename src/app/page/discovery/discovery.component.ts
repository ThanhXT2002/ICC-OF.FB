import { Component, signal } from '@angular/core';


export type MenuItemHeader = {
  label: string;
  route?:string;
  icon?:string;
}

@Component({
  selector: 'app-discovery',
  standalone: true,
  imports: [],
  templateUrl: './discovery.component.html',
  styleUrl: './discovery.component.scss'
})
export class DiscoveryComponent {
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

}
