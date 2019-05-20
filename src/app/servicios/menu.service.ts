import{ Injectable } from '@angular/core';

@Injectable()

export class MenuService{
    
    private desayunoMenu:any[] = [
            {
                nombre:'Sándwich de Jamón con Queso',
                precio: '$ 35',
                imagen:'../assets/images/lote/sandwuich.png',
                valor: 35
            },
            {
                nombre:'Cafe Americano',
                precio: '$ 20',
                imagen:'../assets/images/lote/coffee-1.png',
                valor: 20
            },
            {
                nombre:'Cafe con Leche',
                precio: '$ 28',
                imagen:'../assets/images/lote/coffee-2.png',
                valor: 28
            },
            
            {
                nombre: 'Jugo Natural',
                precio: '$ 15',
                imagen: '../assets/images/lote/jugo-1.png',
                valor: 15
            }
     ]

    constructor() {
       
    }

    getMenu(){
        return this.desayunoMenu;
    }
}