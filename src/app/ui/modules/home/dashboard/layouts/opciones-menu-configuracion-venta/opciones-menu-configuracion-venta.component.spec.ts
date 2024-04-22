import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionesMenuConfiguracionVentaComponent } from './opciones-menu-configuracion-venta.component';

describe('OpcionesMenuConfiguracionVentaComponent', () => {
  let component: OpcionesMenuConfiguracionVentaComponent;
  let fixture: ComponentFixture<OpcionesMenuConfiguracionVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpcionesMenuConfiguracionVentaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpcionesMenuConfiguracionVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
