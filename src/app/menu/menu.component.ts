import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { menu } from './menu.service';
import { Nurse } from './menu.service';
 
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})

export class MenuComponent implements OnInit{
  nurses: Nurse[] = [];
 
  constructor(private _menu:menu){}
 
  ngOnInit(): void {
    this.getAll();
  }
 
  getAll(){
    this._menu.getNurses().subscribe(
      (data: Nurse[]) => {
        this.nurses = data;
      }
    )
  }
}
