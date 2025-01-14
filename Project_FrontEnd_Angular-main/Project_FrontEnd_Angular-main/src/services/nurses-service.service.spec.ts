import { TestBed } from '@angular/core/testing';

import { NursesServiceService } from './nurses-service.service';

describe('NursesServiceService', () => {
  let service: NursesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NursesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
