import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionesMenuConfiguracionComponent } from './opciones-menu-configuracion.component';

describe('OpcionesMenuConfiguracionComponent', () => {
  let component: OpcionesMenuConfiguracionComponent;
  let fixture: ComponentFixture<OpcionesMenuConfiguracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpcionesMenuConfiguracionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpcionesMenuConfiguracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
