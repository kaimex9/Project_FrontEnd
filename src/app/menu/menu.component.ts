import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Nurse, NurseConnection } from '../../services/nurses-BBDD.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  providers: [NurseConnection]
})
export class MenuComponent implements OnInit {
  nurses: Nurse[] = [];
 
  constructor(private Nurse:NurseConnection){ }
 
  ngOnInit(): void {
    this.getAll();
    console.log(localStorage.getItem("LoggedNurse"));
  }
 
  getAll(){
    this.Nurse.getNurses().subscribe(
      (data: Nurse[]) => {
        this.nurses = data;
      }
    )
  }

  loggedNurse(){
    if(localStorage.getItem("LoggedNurse") == null){
      return false;
    }else{
      return true;
    }
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
