import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrationBarComponent } from './cration-bar.component';

describe('CrationBarComponent', () => {
  let component: CrationBarComponent;
  let fixture: ComponentFixture<CrationBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrationBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
