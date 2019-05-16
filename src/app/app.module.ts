import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


//Rutas
import{ app_routing } from './app.routes';

//Servicios
import { MenuService } from './servicios/menu.service';
import { HamburguesasService } from './servicios/hamburguesas.service';
import { ExtrasService } from './servicios/extras.service';
import { BebidasService } from './servicios/bebidas.service';
import { GuarnicionesServicio } from './servicios/guarniciones.service';
import { EspecificacionesService } from './servicios/especificaciones.service';
import { InputService } from './servicios/input.service';
import { TicketService } from './servicios/ticket.service';


//componentes
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { TicketComponent } from './components/menu/ticket/ticket.component';
import { HamburguesasComponent } from './components/hamburguesas/hamburguesas.component';
import { ProductosComponent } from './components/productos/productos.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { NameComponent } from './components/name/name.component';
import { ExtrasComponent } from './componets/extras/extras.component';
import { BebidasComponent } from './components/bebidas/bebidas.component';
import { GuarnicionComponent } from './components/guarnicion/guarnicion.component';
import { EspecificacionesComponent } from './components/especificaciones/especificaciones.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    WelcomeComponent,
    TicketComponent,
    HamburguesasComponent,
    ProductosComponent,
    CategoriasComponent,
    NameComponent,
    ExtrasComponent,
    BebidasComponent,
    GuarnicionComponent,
    EspecificacionesComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    FormsModule
  ],
  providers: [
    MenuService,
    HamburguesasService,
    ExtrasService,
    BebidasService,
    GuarnicionesServicio,
    EspecificacionesService,
    InputService,
    TicketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
