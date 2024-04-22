import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarClasificacionesComponent } from './editar-clasificaciones.component';

describe('EditarClasificacionesComponent', () => {
  let component: EditarClasificacionesComponent;
  let fixture: ComponentFixture<EditarClasificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarClasificacionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarClasificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
