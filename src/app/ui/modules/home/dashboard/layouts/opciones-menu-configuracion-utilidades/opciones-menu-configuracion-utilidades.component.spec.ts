import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionesMenuConfiguracionUtilidadesComponent } from './opciones-menu-configuracion-utilidades.component';

describe('OpcionesMenuConfiguracionUtilidadesComponent', () => {
  let component: OpcionesMenuConfiguracionUtilidadesComponent;
  let fixture: ComponentFixture<OpcionesMenuConfiguracionUtilidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpcionesMenuConfiguracionUtilidadesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpcionesMenuConfiguracionUtilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
