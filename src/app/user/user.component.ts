import { Component, OnInit } from '@angular/core';
import { NurseService } from '../../services/nurse.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from "../menu/menu.component";
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule, NgIf, HttpClientModule, MenuComponent],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userId: number = Number(localStorage.getItem("LoggedNurse")); // ID  para pruebas
  user: string = ''; // Nombre del usuario actual
  pass: string = ''; // Contraseña actual del usuario
  loading: boolean = true; // Estado de carga

  constructor(private nurseService: NurseService) {}

  ngOnInit(): void {
    this.loadUserData();
  }

  /**
   * Carga los datos del usuario con el ID definido.
   */
  loadUserData(): void {
    this.nurseService.getAllNurses().subscribe({
      next: (nurses) => {
        // Busca el usuario con el ID
        const nurse = nurses.find((n: any) => n.id === this.userId);
        if (nurse) {
          this.user = nurse.user;
          this.pass = nurse.pass;
        } else {
          alert('Usuario no encontrado');
        }
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al obtener los datos del usuario:', err);
        alert('Error al cargar los datos');
        this.loading = false;
      },
    });
  }

  /**
   * Modifica los datos del usuario.
   */
  editUser(): void {
    console.log('Datos enviados:', { id: this.userId, user: this.user, pass: this.pass });
  
    if (this.user.trim() === '' || this.pass.trim() === '') {
      alert('Por favor completa todos los campos.');
      return;
    }
  
    this.nurseService.editNurse(this.userId, this.user, this.pass).subscribe({
      next: (response) => {
        console.log('Respuesta del backend:', response);
        alert('Usuario modificado con éxito');
      },
      error: (err) => {
        console.error('Error al modificar el usuario:', err);
        alert('Error al modificar el usuario');
      },
    });
  

    this.nurseService.editNurse(this.userId, this.user, this.pass).subscribe({
      next: (response) => {
        console.log('Usuario modificado con éxito:', response);
        alert('Usuario modificado con éxito');
      },
      error: (err) => {
        console.error('Error al modificar el usuario:', err);
        alert('Error al modificar el usuario');
      },
    });
  }

  /**
   * Elimina el usuario actual.
   */
  deleteUser(): void {
    this.nurseService.deleteNurse(this.userId).subscribe({
      next: (response) => {
        console.log('Usuario eliminado con éxito:', response);
        alert('Usuario eliminado con éxito');
        this.user = '';
        this.pass = '';
        localStorage.removeItem("LoggedNurse");
      },
      error: (err) => {
        console.error('Error al eliminar el usuario:', err);
        alert('Error al eliminar el usuario');
      },
    });
  }
}