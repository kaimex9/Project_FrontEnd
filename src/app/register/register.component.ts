import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NursesServiceService } from '../../services/nurses-service.service';
import { confirmPassword } from './register.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  constructor(private router: Router) { }
  
  name = '';
  password = '';
  confirmpassword = '';

  register(): void{
    let verify = confirmPassword(this.name, this.password, this.confirmpassword);
    if(!verify){
      alert("Las contraseñas no coinciden");
    }else{
      this.router.navigate(['list-nurses']);
    }
    
  }
  
}
