import{ Injectable } from '@angular/core';

@Injectable()

export class HamburguesasService{

    private hamburguesaMenu:any []=[
        
        {
            nombre: 'Res',
            precio: '$ 40',
            imagen: '../assets/images/lote/sencilla.png'
        },
        {
            nombre:'Pollo',
            precio: '$ 40',
            imagen:'../assets/images/lote/sencilla.png'
        },
        {
            nombre: 'Vegetariana',
            precio: '$ 40',
            imagen:'../assets/images/lote/sencilla.png'
        },
        {
            nombre: 'Res Doble',
            precio: '$ 55',
            imagen: '../assets/images/lote/hamburger-1.png'
        },
        {
            nombre:'Pollo Doble',
            precio: '$ 55',
            imagen: '../assets/images/lote/hamburger-2.png'
         },
         {
             nombre: 'Vegetariana Doble',
             precio: '$ 55',
             imagen: '../assets/images/lote/hamburger-3.png'
         }    
    ];

    constructor() {
        console.log('servicio de hamburguesa listo');
    }

    getHamburguesas(){
        return this.hamburguesaMenu
    }
}