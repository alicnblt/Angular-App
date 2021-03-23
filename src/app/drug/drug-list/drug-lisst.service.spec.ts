import { TestBed } from '@angular/core/testing';

import { DrugLisstService } from './drug-lisst.service';

describe('DrugLisstService', () => {
  let service: DrugLisstService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrugLisstService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
