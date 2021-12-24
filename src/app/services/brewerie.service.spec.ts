import { TestBed } from '@angular/core/testing';

import { BrewerieService } from './brewerie.service';

describe('BrewerieService', () => {
  let service: BrewerieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrewerieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
