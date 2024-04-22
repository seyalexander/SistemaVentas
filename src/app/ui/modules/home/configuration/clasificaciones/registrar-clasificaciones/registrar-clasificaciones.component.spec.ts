import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarClasificacionesComponent } from './registrar-clasificaciones.component';

describe('RegistrarClasificacionesComponent', () => {
  let component: RegistrarClasificacionesComponent;
  let fixture: ComponentFixture<RegistrarClasificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarClasificacionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrarClasificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
