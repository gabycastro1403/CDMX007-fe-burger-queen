import{ Injectable } from '@angular/core';

@Injectable()

export class MenuService{
    
    private desayunoMenu:any[] = [
            {
                nombre:'Sandwich de Jamón con Queso',
                precio: '$ 35',
                imagen:'../assets/images/lote/sandwuich.png'
            },
            {
                nombre:'Cafe Americano',
                precio: '$ 20',
                imagen:'../assets/images/lote/coffee-1.png'
            },
            {
                nombre:'Cafe con Leche',
                precio: '$ 28',
                imagen:'../assets/images/lote/coffee-2.png'
            },
            
            {
                nombre: 'Jugo Natural',
                precio: '$ 15',
                imagen: '../assets/images/lote/jugo-1.png'
            }
     ]

    constructor() {
        console.log('servicio listo')
    }

    getMenu(){
        return this.desayunoMenu;
    }
}