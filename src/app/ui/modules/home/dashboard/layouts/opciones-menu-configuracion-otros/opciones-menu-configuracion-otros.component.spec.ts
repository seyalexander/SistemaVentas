import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionesMenuConfiguracionOtrosComponent } from './opciones-menu-configuracion-otros.component';

describe('OpcionesMenuConfiguracionOtrosComponent', () => {
  let component: OpcionesMenuConfiguracionOtrosComponent;
  let fixture: ComponentFixture<OpcionesMenuConfiguracionOtrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpcionesMenuConfiguracionOtrosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpcionesMenuConfiguracionOtrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
