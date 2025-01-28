import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Alabay, Nurse } from '../../services/nurses-BBDD.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  providers: [Alabay]
})
export class MenuComponent implements OnInit {
  nurses: Nurse[] = [];
 
  constructor(private _Alabay:Alabay){ }
 
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
}
