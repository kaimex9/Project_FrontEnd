import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http'; // Importar HttpClientModule
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { importProvidersFrom } from '@angular/core'; // Necesario para módulos
import { NurseService } from '../services/nurse.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(HttpClientModule), // Usa importProvidersFrom para módulos
    importProvidersFrom(FormsModule), // Agregar FormsModule correctamente
    NurseService // Servicio
  ]
};
