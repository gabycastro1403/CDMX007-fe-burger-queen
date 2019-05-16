import{ Injectable } from '@angular/core';

@Injectable()

export class HamburguesasService{

    private hamburguesaMenu:any []=[
        
        {
            nombre: 'Res ',
            precio: '$ 40',
            imagen: '../assets/images/lote/sencilla.png',
            index: 0
        },
        {
            nombre:'Pollo ',
            precio: '$ 40',
            imagen:'../assets/images/lote/sencilla.png',
            index: 1
        },
        {
            nombre: 'Vegetariana ',
            precio: '$ 40',
            imagen:'../assets/images/lote/sencilla.png',
            index: 2
        },
        {
            nombre: 'Res Doble',
            precio: '$ 55',
            imagen: '../assets/images/lote/hamburger-1.png',
            index: 3
        },
        {
            nombre:'Pollo Doble',
            precio: '$ 55',
            imagen: '../assets/images/lote/hamburger-2.png',
            index: 4
         },
         {
             nombre: 'Vegetariana Doble',
             precio: '$ 55',
             imagen: '../assets/images/lote/hamburger-3.png',
             index: 5
         }    
    ];

    constructor() {
        console.log('servicio de hamburguesa listo');
    }

    getHamburguesas(){
        return this.hamburguesaMenu
    }
}