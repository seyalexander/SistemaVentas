import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionesMenuConfiguracionAvanzadaComponent } from './opciones-menu-configuracion-avanzada.component';

describe('OpcionesMenuConfiguracionAvanzadaComponent', () => {
  let component: OpcionesMenuConfiguracionAvanzadaComponent;
  let fixture: ComponentFixture<OpcionesMenuConfiguracionAvanzadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpcionesMenuConfiguracionAvanzadaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpcionesMenuConfiguracionAvanzadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
