import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NursesServiceService } from '../../services/nurses-service.service';
import { Login } from './login.service';
import { Nurse, NurseConnection } from '../../services/nurses-BBDD.service';
import { MenuComponent } from '../menu/menu.component';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterLinkActive, MenuComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [NurseConnection]
})
export class LoginComponent implements OnInit{

  name = '';
  password = '';

  constructor(private router: Router, private Nurse:NurseConnection) { }

  nurses: Nurse[] = [];
 
  ngOnInit(): void {
    this.getAll();
    console.log("me cago en todo");
  }
 
  getAll(){
    this.Nurse.getNurses().subscribe(
      (data: Nurse[]) => {
        this.nurses = data;
      }
    )
  }
  
  login(): void {
    let Alabay = this.name;
    let Alabay2 = this.password;
    let nurse = false;
    this.nurses.forEach(function(a, index, n){
      if(n[index].user.toLowerCase() == Alabay.toLowerCase() && n[index].pass == Alabay2){
          localStorage.setItem("LoggedNurse", String(n[index].id));
          nurse = true;
      }
    })

    if (nurse) {
      this.router.navigate(['list-nurses']);
    } else {
      alert("Credenciales incorrectos");
      console.log(Alabay);
      console.log(this.nurses[0].user)
    }

  };
}