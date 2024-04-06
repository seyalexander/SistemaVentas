import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../../shared/layouts/headers/header/header.component';
import { ButtonOpcionesDashboardComponent } from '../../components/buttons/button-opciones-dashboard/button-opciones-dashboard.component';
import { ButtonUsuarioDashboardComponent } from '../../components/buttons/button-usuario-dashboard/button-usuario-dashboard.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    HeaderComponent,
    ButtonOpcionesDashboardComponent,
    ButtonUsuarioDashboardComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  mainMenu: {
    defaultOptions: Array<any>
    accessLink: Array<any>;
  } = {
    defaultOptions: [],
    accessLink: [],
  };

  constructor(private router: Router) {}

  ngOnInit(): void {

    this.mainMenu.defaultOptions = [
      {
        name: 'Vender',
        icon: 'uil uil-estate',
        description: 'Acceder a la pantalla de venta',
        route: ['/'],
      },
    ];

    this.mainMenu.accessLink = [
      {
        name: ['Configuración'],
        description: 'Modificar La Base De Datos',
        icon: 'uil uil-document-info',
        route: ['/', 'configuracion']
      },
      {
        name: ['Caja'],
        description: 'Movimientos y cierre de caja',
        icon: 'uil uil-document-info',
        route: ['/', '']
      },
      {
        name: ['Documentos'],
        description: 'Documentos y compra de stock',
        icon: 'uil uil-document-info',
        route: ['/', '']
      },
      {
        name: ['Estadíticas'],
        description: 'Listados de estadísticas',
        icon: 'uil uil-document-info',
        route: ['/', '']
      },
    ]
  }


}
