import { async, TestBed } from '@angular/core/testing';
import { PaisModule } from './pais.module';

describe('PaisModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PaisModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PaisModule).toBeDefined();
  });
});
