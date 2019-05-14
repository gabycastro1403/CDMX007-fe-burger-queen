import { Component, OnInit } from '@angular/core';
import { MenuService} from '../../servicios/menu.service'

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  menu:any[]= [];
  constructor(private _menuService:MenuService) { }

  ngOnInit() {
    this.menu = this._menuService.getMenu();
    console.log(this.menu);
  }

}
