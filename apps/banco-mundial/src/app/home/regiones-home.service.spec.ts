import { TestBed } from '@angular/core/testing';

import { RegionesHomeService } from './regiones-home.service';

describe('RegionesHomeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegionesHomeService = TestBed.get(RegionesHomeService);
    expect(service).toBeTruthy();
  });
});
