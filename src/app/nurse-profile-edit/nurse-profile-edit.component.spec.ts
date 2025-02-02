import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseProfileEditComponent } from './nurse-profile-edit.component';

describe('NurseProfileEditComponent', () => {
  let component: NurseProfileEditComponent;
  let fixture: ComponentFixture<NurseProfileEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NurseProfileEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NurseProfileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
