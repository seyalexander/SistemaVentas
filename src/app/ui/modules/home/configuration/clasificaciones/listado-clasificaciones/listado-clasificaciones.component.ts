import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ClasificacionesService } from '../../../../../../infraestructure/driven-adapter/clasificaciones/clasificaciones.service';
import { clasificacionModel } from '../../../../../../domain/models/clasificaciones/clasificaciones.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listado-clasificaciones',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './listado-clasificaciones.component.html',
  styleUrl: './listado-clasificaciones.component.css',
})
export class ListadoClasificacionesComponent {
  toolBarApp: {
    defaultOption: Array<any>;
  } = {
      defaultOption: [],
    };

  datosClasificacioneslista: Array<clasificacionModel> = [];
  listObservers$: Array<Subscription> = [];

  constructor(
    private router: Router,
    private datosClasificacionesService: ClasificacionesService
  ) { }

  ngOnInit(): void {
    this.toolBarApp.defaultOption = [
      {
        nameOption: 'Clasificaciones',
        iconOption: 'uil-arrow-left',
        routeOption: ['/', 'configuracion', 'avanzada'],
      },
    ];


    const ObservarDatosClasificacioneslista$ = this.datosClasificacionesService
      .getAllClasificacion()
      .subscribe((Response) => {
        try {
          this.datosClasificacioneslista = Response;
        } catch (error) {
          console.log(error);
        }
      });

    this.listObservers$ = [ObservarDatosClasificacioneslista$];
  }

}

