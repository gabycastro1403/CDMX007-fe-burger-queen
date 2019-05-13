import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


//Rutas
import{ app_routing } from './app.routes';

//Servicios
import { MenuService } from './servicios/menu.service';
import { HamburguesasService } from './servicios/hamburguesas.service'


//componentes
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { TicketComponent } from './components/menu/ticket/ticket.component';
import { HamburguesasComponent } from './components/hamburguesas/hamburguesas.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    WelcomeComponent,
    TicketComponent,
    HamburguesasComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    FormsModule
  ],
  providers: [
    MenuService,
    HamburguesasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
