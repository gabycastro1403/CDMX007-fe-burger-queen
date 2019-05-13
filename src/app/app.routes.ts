import{RouterModule, Routes} from '@angular/router';
import{ WelcomeComponent} from './components/welcome/welcome.component';
import{ MenuComponent } from './components/menu/menu.component';
import{ HamburguesasComponent } from './components/hamburguesas/hamburguesas.component';

const app_routes : Routes = [
    {path: 'welcome', component: WelcomeComponent },
    {path: 'menu', component: MenuComponent },
    {path: 'hamburguesas', component: HamburguesasComponent },
    {path: '**', pathMatch:'full', redirectTo:'welcome'}

];

export const app_routing = RouterModule.forRoot(app_routes);
