import { Component, OnInit } from '@angular/core';
import { ExtrasService} from '../../servicios/extras.service';
import { TicketService } from '../../servicios/ticket.service';

@Component({
  selector: 'app-extras',
  templateUrl: './extras.component.html',
  styleUrls: ['./extras.component.css']
})
export class ExtrasComponent implements OnInit {

  constructor(private _extrasMenu:ExtrasService,
     private _ticketService:TicketService) { }

  extras:any[] =[];
  product:object;

  ngOnInit() {
    this.extras = this._extrasMenu.getExtras();
    console.log(this.extras);
  }
  public searchProduct(index){
    this.extras.forEach( element=>{
      if(element.index== index){
        this.product=element;
        this._ticketService.saveTicket(this.product);
        //return this.product;
      }
    })
  };

}
