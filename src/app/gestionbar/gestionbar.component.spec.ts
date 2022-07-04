import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionbarComponent } from './gestionbar.component';

describe('GestionbarComponent', () => {
  let component: GestionbarComponent;
  let fixture: ComponentFixture<GestionbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
