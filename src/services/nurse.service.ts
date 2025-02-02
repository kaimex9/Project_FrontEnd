import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NurseService {
  private readonly API_URL = 'http://localhost:8000/nurse';

  constructor(private http: HttpClient) {}

  getAllNurses(): Observable<any> {
    return this.http.get(`${this.API_URL}/index`);
  }

  login(name: string, pass: string): Observable<any> {
    return this.http.post(`${this.API_URL}/login`, { name, pass });
  }

  findByName(name: string): Observable<any> {
    return this.http.get(`${this.API_URL}/name/${name}`);
  }

  register(name: string, pass: string): Observable<any> {
    return this.http.post(`${this.API_URL}/new`, { name, pass });
  }

  /**
   * Edita la información de una enfermera.
   * @param id El ID de la enfermera a editar.
   * @param user El nuevo nombre de usuario.
   * @param pass La nueva contraseña.
   * @returns Un Observable con la respuesta del servidor.
   */
  editNurse(id: number, user: string, pass: string): Observable<any> {
    console.log('Datos enviados al backend:', { id, user, pass }); // Depuración
    return this.http.put(`${this.API_URL}/${id}`, { user, pass });
  }
  

  /**
   * Elimina una enfermera por ID.
   * @param id El ID de la enfermera a eliminar.
   * @returns Un Observable con la respuesta del servidor.
   */
  deleteNurse(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }
}
