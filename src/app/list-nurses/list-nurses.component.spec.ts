import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNursesComponent } from './list-nurses.component';

describe('ListNursesComponent', () => {
  let component: ListNursesComponent;
  let fixture: ComponentFixture<ListNursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListNursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListNursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
