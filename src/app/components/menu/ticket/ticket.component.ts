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
   
  

  }
  
  
  



