import { Component } from '@angular/core';
import { InputService } from '../../../servicios/input.service';
import { TicketService } from '../../../servicios/ticket.service';


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {
  
   nameValue:string;
  constructor(private _inputService:InputService, private _ticketService:TicketService) { 
    
   }
  
  arrayCero:number=0;
   sum:number;
   sumTotal:any;

  totalCount(arr:any[]){
    if(arr.length != this.arrayCero){
     this.sum=0;
      for(let Total of arr)
       this.sum += Total.valor;
        return this.sum;
    }
  };

  confirmacion(arr:any[]){
    arr.length=0;
  }
  
  }
  
  
  



