import { Injectable } from '@angular/core';
Injectable()

export class EspecificacionesService{
    private especificacionesMenu:any[]=[
        {
            nombre: 'Cebolla',
            imagen: '../assets/images/lote/onion-1.png'
        },
        {
            nombre: 'Pepinillos',
            imagen: '../assets/images/lote/pickle-1.png'
        },
        {
            nombre: 'Jitomate',
            imagen: '../assets/images/lote/tomato-1.png'
        },
        {
            nombre: 'Lechuga',
            imagen: '../assets/images/lote/lettuce-1.png'
        },
        {
            nombre: 'Aderezo',
            imagen: '../assets/images/lote/sauce-bottle-1.png'
        },
        {
            nombre: 'Queso',
            imagen: '../assets/images/lote/cheese-1.png'
        }
    ];

    getEspecificacion(){
        return this.especificacionesMenu;
    }
}