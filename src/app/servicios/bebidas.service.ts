import { Injectable } from '@angular/core';

@Injectable()
export class BebidasService{
    private bebidasMenu:any[] = [
        {
            nombre:'Agua 500ml',
            precio: '$ 10',
            imagen: '../assets/images/lote/agua.png',
            valor: 10
        },
        {
             nombre:'Refresco 500ml',
             precio: '$ 15',
             imagen: '../assets/images/lote/beverage.png',
             valor: 15
        },
        {
            nombre: 'Agua 750ml',
            precio: '$ 15',
            imagen:'../assets/images/lote/agua.png',
            valor: 15
        },
        {
             nombre: 'Refresco 750ml',
             precio: '$ 20',
             imagen: '../assets/images/lote/beverage.png',
             valor: 20
        }
    ];
    constructor(){
        
    }

    getBebidas(){
        return this.bebidasMenu;
    }
}