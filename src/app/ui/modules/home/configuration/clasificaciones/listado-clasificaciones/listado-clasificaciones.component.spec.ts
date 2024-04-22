import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoClasificacionesComponent } from './listado-clasificaciones.component';

describe('ListadoClasificacionesComponent', () => {
  let component: ListadoClasificacionesComponent;
  let fixture: ComponentFixture<ListadoClasificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoClasificacionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListadoClasificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
