import { Component } from '@angular/core';
import { Nurse, NurseConnection } from '../../services/nurses-BBDD.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nurse-profile',
  standalone: true,
  imports: [],
  templateUrl: './nurse-profile.component.html',
  styleUrl: './nurse-profile.component.css',
  providers: [NurseConnection]
})
export class NurseProfileComponent {
constructor(private router: Router, private Nurse:NurseConnection) { }

  nurses: Nurse[] = [];
 
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
