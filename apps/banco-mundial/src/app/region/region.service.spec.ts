import { TestBed } from '@angular/core/testing';

import { RegionPaisesService } from './region-paises.service';

describe('RegionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegionPaisesService = TestBed.get(RegionPaisesService);
    expect(service).toBeTruthy();
  });
});
