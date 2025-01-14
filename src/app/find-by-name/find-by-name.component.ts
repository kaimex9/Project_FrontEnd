import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-find-by-name',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './find-by-name.component.html',
  styleUrl: './find-by-name.component.css'
})
export class FindByNameComponent {
  nurseName: string = ''; // Para almacenar el valor del input
  nursesList = [
    { user: "Emmeline", password: "iM5}~tp/" },
    { user: "Susana", password: "zE4)U'ptR" },
    { user: "Susana", password: "pQ7?'1+$<l" },
    { user: "Susana", password: "wP7@bQp@|S~HlhI" },
    { user: "Aharon", password: "zE4)U'ptR" },
    { user: "Ardath", password: "eE3/}$}Fh5" },
    { user: "Cyrill", password: "pQ7?'1+$<l" }
  ];
  filteredNurses: any[] = []; // Resultado filtrado

  search() {
    this.filteredNurses = this.nursesList.filter(nurse =>
      nurse.user.toLowerCase().includes(this.nurseName.toLowerCase())
    );
  }
}