import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NursesServiceService } from '../../services/nurses-service.service';
import { Login } from './login.service';
import { Alabay, Nurse } from '../../services/nurses-BBDD.service';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [Alabay]
})
export class LoginComponent implements OnInit{

  name = '';
  password = '';

  constructor(private router: Router, private _Alabay:Alabay) { }

  nurses: Nurse[] = [];
 
  ngOnInit(): void {
    this.getAll();
    console.log("me cago en todo");
  }
 
  getAll(){
    this._Alabay.getNurses().subscribe(
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
    }

  };
}