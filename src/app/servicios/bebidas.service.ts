import { Injectable } from '@angular/core';

@Injectable()
export class BebidasService{
    private bebidasMenu:any[] = [
        {
            nombre:'Agua 500ml',
            precio: '$ 10',
            imagen: '../assets/images/lote/agua.png',
            index: 0
        },
        {
             nombre:'Refresco 500ml',
             precio: '$ 15',
             imagen: '../assets/images/lote/beverage.png',
             index: 1
        },
        {
            nombre: 'Agua 750ml',
            precio: '$ 15',
            imagen:'../assets/images/lote/agua.png',
            index: 2
        },
        {
             nombre: 'Refresco 750ml',
             precio: '$ 20',
             imagen: '../assets/images/lote/beverage.png',
             index: 3
        }
    ];
    constructor(){
        console.log('Servicio de bebidas listo');
    }

    getBebidas(){
        return this.bebidasMenu;
    }
}