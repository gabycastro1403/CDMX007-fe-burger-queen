import { Component, OnInit, } from '@angular/core';
import { HamburguesasService } from '../../servicios/hamburguesas.service';

@Component({
  selector: 'app-hamburguesas',
  templateUrl: './hamburguesas.component.html',
  styleUrls: ['./hamburguesas.component.css']
})
export class HamburguesasComponent implements OnInit {

  constructor(private _hamburguesaService:HamburguesasService) { }
  hamburguesa:any[] = [];
  inputValue:string;
  mostrar=true;

  onKey(event) {
    this.inputValue = event.target.value;
    //console.log(this.inputValue);
    return this.inputValue;
  }

  ngOnInit() {
    this.hamburguesa= this._hamburguesaService.getHamburguesas();
  }
  
}
