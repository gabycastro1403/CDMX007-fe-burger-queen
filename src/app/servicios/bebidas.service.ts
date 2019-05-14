import { Injectable } from '@angular/core';

@Injectable()
export class BebidasService{
    private bebidasMenu:any[] = [
        {
            nombre:'Agua 500ml',
            precio: '$ 10',
            imagen: '../assets/images/lote/agua.png'
        },
        {
             nombre:'Refresco 500ml',
             precio: '$ 15',
             imagen: '../assets/images/lote/beverage.png'
        },
        {
            nombre: 'Agua 750ml',
            precio: '$ 15',
            imagen:'../assets/images/lote/agua.png'
        },
        {
             nombre: 'Refresco 750ml',
             precio: '$ 20',
             imagen: '../assets/images/lote/beverage.png'
        }
    ];
    constructor(){
        console.log('Servicio de bebidas listo');
    }

    getBebidas(){
        return this.bebidasMenu;
    }
}