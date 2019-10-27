import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisViewComponent } from './pais-view.component';

describe('PaisViewComponent', () => {
  let component: PaisViewComponent;
  let fixture: ComponentFixture<PaisViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaisViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
