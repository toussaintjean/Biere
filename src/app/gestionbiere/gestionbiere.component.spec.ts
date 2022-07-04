import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionbiereComponent } from './gestionbiere.component';

describe('GestionbiereComponent', () => {
  let component: GestionbiereComponent;
  let fixture: ComponentFixture<GestionbiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionbiereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionbiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
