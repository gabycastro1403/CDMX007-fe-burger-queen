import { Component, OnInit } from '@angular/core';
import { ExtrasService} from '../../servicios/extras.service';

@Component({
  selector: 'app-extras',
  templateUrl: './extras.component.html',
  styleUrls: ['./extras.component.css']
})
export class ExtrasComponent implements OnInit {

  constructor(private _extrasMenu:ExtrasService) { }

  extras:any[] =[];

  ngOnInit() {
    this.extras = this._extrasMenu.getExtras();
    console.log(this.extras);
  }

}
