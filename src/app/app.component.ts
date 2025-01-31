import { Component } from '@angular/core';
import { RouterOutlet, Routes, RouterModule } from '@angular/router'; 
import { MenuComponent } from './menu/menu.component';  
import { ListNursesComponent } from './list-nurses/list-nurses.component';  
import { UserComponent } from './user/user.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', component: ListNursesComponent },
  { path: 'list-nurses', component: ListNursesComponent },

];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'listar_enfermeros';

}
