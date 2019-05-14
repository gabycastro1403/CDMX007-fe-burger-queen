import { Component, OnInit } from '@angular/core';
import { GuarnicionesServicio } from '../../servicios/guarniciones.service'

@Component({
  selector: 'app-guarnicion',
  templateUrl: './guarnicion.component.html',
  styleUrls: ['./guarnicion.component.css']
})
export class GuarnicionComponent implements OnInit {
guarnicion:any[] = [];

  constructor( private _guarnicionService:GuarnicionesServicio) { }

  ngOnInit() {
    this.guarnicion = this._guarnicionService.getGuarnicion();
    console.log(this.guarnicion);
  }

}
