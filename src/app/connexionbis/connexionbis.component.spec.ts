import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionbisComponent } from './connexionbis.component';

describe('ConnexionbisComponent', () => {
  let component: ConnexionbisComponent;
  let fixture: ComponentFixture<ConnexionbisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnexionbisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnexionbisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
