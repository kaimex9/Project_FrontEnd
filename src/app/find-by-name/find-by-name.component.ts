import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from "../menu/menu.component";
import { Nurse, NurseConnection } from '../../services/nurses-BBDD.service';


@Component({
  selector: 'app-find-by-name',
  standalone: true,
  imports: [FormsModule, NgFor, MenuComponent],
  templateUrl: './find-by-name.component.html',
  styleUrl: './find-by-name.component.css',
  providers: [NurseConnection]
})
export class FindByNameComponent {
  nurseName: string = ''; // Para almacenar el valor del input
  nurses: Nurse[] = [];
  filteredNurses: any[] = []; // Resultado filtrado
  
    constructor(private Nurse:NurseConnection) { }
    
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
    
  search() {
    this.filteredNurses = this.nurses.filter(nurse =>
      nurse.user.toLowerCase().includes(this.nurseName.toLowerCase())
    );
  }
}