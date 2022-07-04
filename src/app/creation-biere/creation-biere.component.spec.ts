import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationBiereComponent } from './creation-biere.component';

describe('CreationBiereComponent', () => {
  let component: CreationBiereComponent;
  let fixture: ComponentFixture<CreationBiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationBiereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationBiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
