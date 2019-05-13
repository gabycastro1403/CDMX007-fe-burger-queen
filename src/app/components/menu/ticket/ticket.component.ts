import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  constructor() { 
    //console.log(client);
  }

  ngOnInit() {
  }
@Input() inputValue:string;
//@Input()client:any = { name:'hola ticket'};


}
