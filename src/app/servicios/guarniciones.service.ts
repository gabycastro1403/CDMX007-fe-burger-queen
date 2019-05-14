import { Injectable } from '@angular/core';

Injectable()

export class GuarnicionesServicio{
    private guarnicionMenu:any[] = [
        {
            nombre:'Papas fritas',
            precio: '$ 15',
            imagen: '../assets/images/lote/french-fries-2.png'
        },
        {
            nombre: 'Aros de Cebolla',
            precio: '$15',
            imagen: '../assets/images/lote/onion-rings.png'
        }

    ];
    constructor(){
        console.log('Servicio de guarnicion listo');
    }

    getGuarnicion(){
        return this.guarnicionMenu;
    }
}