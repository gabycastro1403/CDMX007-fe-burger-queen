import{ Injectable } from '@angular/core';

@Injectable()

export class HamburguesasService{

    private hamburguesaMenu:any []=[
        
        {
            nombre: 'Res ',
            precio: '$ 40',
            imagen: '../assets/images/lote/sencilla.png',
            valor: 40
        },
        {
            nombre:'Pollo ',
            precio: '$ 40',
            imagen:'../assets/images/lote/sencilla.png',
            valor: 40
        },
        {
            nombre: 'Vegetariana ',
            precio: '$ 40',
            imagen:'../assets/images/lote/sencilla.png',
            valor: 40
        },
        {
            nombre: 'Res Doble',
            precio: '$ 55',
            imagen: '../assets/images/lote/hamburger-1.png',
            valor: 55
        },
        {
            nombre:'Pollo Doble',
            precio: '$ 55',
            imagen: '../assets/images/lote/hamburger-2.png',
            valor: 55
         },
         {
             nombre: 'Vegetariana Doble',
             precio: '$ 55',
             imagen: '../assets/images/lote/hamburger-3.png',
             valor: 55
         }    
    ];

    constructor() {
       
    }

    getHamburguesas(){
        return this.hamburguesaMenu
    }
}