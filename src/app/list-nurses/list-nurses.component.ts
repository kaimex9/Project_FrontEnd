import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NursesServiceService } from '../../services/nurses-service.service';

@Component({
  selector: 'app-list-nurses',
  standalone: true,
  imports: [NgFor,],
  templateUrl: './list-nurses.component.html',
  styleUrl: './list-nurses.component.css'
})
export class ListNursesComponent {
  
}
