import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionesMenuConfiguracionBasicaComponent } from './opciones-menu-configuracion-basica.component';

describe('OpcionesMenuConfiguracionBasicaComponent', () => {
  let component: OpcionesMenuConfiguracionBasicaComponent;
  let fixture: ComponentFixture<OpcionesMenuConfiguracionBasicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpcionesMenuConfiguracionBasicaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpcionesMenuConfiguracionBasicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
