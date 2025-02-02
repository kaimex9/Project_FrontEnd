import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NursesServiceService } from '../../services/nurses-service.service';
import { confirmPassword, CreateNurse } from './register.service';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterLinkActive, MenuComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers: [CreateNurse]
})

export class RegisterComponent {
  constructor(private router: Router, private Nurse: CreateNurse) { }
  
  name = '';
  password = '';
  confirmpassword = '';
  resultado = [];
  // ngOnInit(): void{
  //   this.Nurse.postNurses().subscribe(
  //     (result) => {
  //       this.resultado = result;
  //     }
  //   )
  // }

  register(): void{
    let verify = confirmPassword(this.name, this.password, this.confirmpassword);
    if(!verify){
      alert("Las contraseñas no coinciden");
    }else{
      alert("usuario");
      console.log(this.name)
      this.Nurse.postNurses().subscribe(
        (algo) => {
          console.log(algo);
        }
      )
      //this.router.navigate(['list-nurses']);
    }
    
  }
  
}
