import { Injectable } from '@angular/core';

Injectable()
export class TicketService{

    productTicket:any[]=[];
    total:number = 0;

    public saveTicket( product:object ){
        this.productTicket.push(product);
        console.log(this.productTicket);
        return this.productTicket;
    }
    
}