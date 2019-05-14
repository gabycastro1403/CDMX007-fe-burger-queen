import { Component, OnInit } from '@angular/core';
import { BebidasService } from '../../servicios/bebidas.service'

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.css']
})
export class BebidasComponent implements OnInit {
bebidas:any[] = [];

  constructor( private _bebidasmenu:BebidasService ) { }

  ngOnInit() {
    this.bebidas= this._bebidasmenu.getBebidas();
    console.log(this.bebidas);
  }

}
