import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonUsuarioDashboardComponent } from './button-usuario-dashboard.component';

describe('ButtonUsuarioDashboardComponent', () => {
  let component: ButtonUsuarioDashboardComponent;
  let fixture: ComponentFixture<ButtonUsuarioDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonUsuarioDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonUsuarioDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
