import{ Injectable } from '@angular/core';

@Injectable()

export class ExtrasService {
    private extrasMenu:any[] = [
        {
            nombre: 'Huevo',
            precio: '$ 15',
            imagen: '../assets/images/lote/egg-5.png',
            valor: 15
        },
        {
            nombre: 'Queso',
            precio: '$ 15',
            imagen: '../assets/images/lote/cheese-2.png',
            valor: 15
        }
    ];
    constructor(){
    }
    
    getExtras(){
        return this.extrasMenu;
    }
}