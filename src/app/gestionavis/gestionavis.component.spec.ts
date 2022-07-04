import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionavisComponent } from './gestionavis.component';

describe('GestionavisComponent', () => {
  let component: GestionavisComponent;
  let fixture: ComponentFixture<GestionavisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionavisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionavisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
