import { Component } from '@angular/core';
import { Nurse, NurseConnection } from '../../services/nurses-BBDD.service';
import { Router, RouterLinkActive } from '@angular/router';
import { RouterLink } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-nurse-profile',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MenuComponent],
  templateUrl: './nurse-profile.component.html',
  styleUrl: './nurse-profile.component.css',
  providers: [NurseConnection]
})
export class NurseProfileComponent {
constructor(private router: Router, private Nurse:NurseConnection) { }

  nurses: Nurse[] = [];
 
  ngOnInit(): void {
    this.getAll();
  }
 
  getAll(){
    this.Nurse.getNurses().subscribe(
      (data: Nurse[]) => {
        this.nurses = data;
      }
    )
  }
  getIndexById(){
    var id = Number(localStorage.getItem("LoggedNurse"));
    this.nurses.forEach(function(a, index, n){
      if(id == n[index].id){
        id = index;
      }
    })
    return id;
  }
}
