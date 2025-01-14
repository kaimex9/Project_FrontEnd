import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NursesServiceService {
  public static nurses = [
      { id: 1, first_name: 'Guillemette', last_name: 'Yole', password: '123'},
      { id: 2, first_name: 'Sylvester', last_name: 'Minnock', password: 'Qwerty' },
      { id: 3, first_name: 'Jennifer', last_name: 'Miranda', password: 'BigBoss' },
      { id: 4, first_name: 'Malory', last_name: 'Kingsly', password: 'GollumGOTY' },
      { id: 5, first_name: 'Bowie', last_name: 'Fitzsimmons', password: 'AlexAlabau' },
      { id: 6, first_name: 'Gothart', last_name: 'Brattell', password: 'Alabay' },
      { id: 7, first_name: 'Brockie', last_name: 'Rookes', password: 'ChingChong' },
      { id: 8, first_name: 'Tiff', last_name: 'Liddell', password: 'NajanMLG' },
      { id: 9, first_name: 'Carine', last_name: 'Whenman', password: 'Cookiezi' },
      { id: 10, first_name: 'Suellen', last_name: 'Jenkerson', password: 'xd' },
  ];
  
  constructor() { }

  
}

