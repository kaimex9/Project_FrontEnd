import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common'; // Importa la directiva NgFor
import { NursesServiceService } from '../../services/nurses-service.service';
import { MenuComponent } from "../menu/menu.component";
import { Nurse, NurseConnection } from '../../services/nurses-BBDD.service';

@Component({
  selector: 'app-list-nurses',
  standalone: true,
  imports: [NgFor, MenuComponent], // Agrega NgFor aquí
  templateUrl: './list-nurses.component.html',
  styleUrls: ['./list-nurses.component.css'],
  providers: [NurseConnection]
})
export class ListNursesComponent implements OnInit {
  nurses: Nurse[] = [];

  constructor(private Nurse:NurseConnection) { }
  

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
}
