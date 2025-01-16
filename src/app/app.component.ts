import { Component } from '@angular/core';
import { RouterOutlet, Routes, RouterModule } from '@angular/router';  // Importa RouterModule correctamente
import { MenuComponent } from './menu/menu.component';  // Importa tu componente de menú
import { ListNursesComponent } from './list-nurses/list-nurses.component';  // Importa el componente para listar enfermeros


const appRoutes: Routes = [
  { path: '', component: ListNursesComponent },  
  { path: 'list-nurses', component: ListNursesComponent },
   
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, MenuComponent,ListNursesComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'listar_enfermeros';
  
}
