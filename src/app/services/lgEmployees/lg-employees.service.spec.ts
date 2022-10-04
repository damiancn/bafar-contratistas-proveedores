import { TestBed } from '@angular/core/testing';

import { LgEmployeesService } from './lg-employees.service';

describe('LgEmployeesService', () => {
  let service: LgEmployeesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LgEmployeesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
