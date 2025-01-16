import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common'; // Importa la directiva NgFor
import { NursesServiceService } from '../../services/nurses-service.service';
import { MenuComponent } from "../menu/menu.component";

@Component({
  selector: 'app-list-nurses',
  standalone: true,
  imports: [NgFor, MenuComponent], // Agrega NgFor aquí
  templateUrl: './list-nurses.component.html',
  styleUrls: ['./list-nurses.component.css'],
})
export class ListNursesComponent implements OnInit {
  nurses: { id: number; first_name: string; last_name: string; password: string }[] = []; // Define el tipo de nurses

  constructor() {}

  ngOnInit(): void {
    // Asigna los datos del servicio
    this.nurses = NursesServiceService.nurses;
  }
}
