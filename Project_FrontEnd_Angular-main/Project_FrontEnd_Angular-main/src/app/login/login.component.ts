import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NursesServiceService } from '../../services/nurses-service.service';
import { Login } from './login.service';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  name = '';
  password = '';

  constructor(private router: Router) { }

  

  login(): void {
    let nurse = Login(this.name, this.password);

    if (nurse) {
      this.router.navigate(['list-nurses']);
    } else {
      alert("Credenciales incorrectos");
    }

  };
}