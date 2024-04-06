import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonOpcionesDashboardComponent } from './button-opciones-dashboard.component';

describe('ButtonOpcionesDashboardComponent', () => {
  let component: ButtonOpcionesDashboardComponent;
  let fixture: ComponentFixture<ButtonOpcionesDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonOpcionesDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonOpcionesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
