import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { OpcionesMenuConfiguracionBasicaComponent } from '../opciones-menu-configuracion-basica/opciones-menu-configuracion-basica.component';

@Component({
  selector: 'app-opciones-menu-configuracion',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    OpcionesMenuConfiguracionBasicaComponent
  ],
  templateUrl: './opciones-menu-configuracion.component.html',
  styleUrl: './opciones-menu-configuracion.component.css'
})
export class OpcionesMenuConfiguracionComponent {

  toolBarApp: {
    defaultOption: Array<any>
  } = {
    defaultOption: []
  };


  mainMenu: {
    defaultOptions: Array<any>
    accessLink: Array<any>
  } = {
    defaultOptions: [],
    accessLink: [],
  };

  constructor(private router: Router) {}

  ngOnInit(): void {

    this.toolBarApp.defaultOption = [
      {
        nameOption: 'Configuración',
        iconOption: 'uil-arrow-left',
        routeOption: ['/']
      }
    ];

    this.mainMenu.defaultOptions = [
      {
        name: 'Básica',
        icon: 'uil uil-estate',
        route: ['/', 'configuracion'],
      },
    ];

    this.mainMenu.accessLink = [
      {
        name: ['Avanzada'],
        icon: 'uil uil-document-info',
        route: ['/', 'configuracion', 'avanzada']
      },
      {
        name: ['Venta'],
        icon: 'uil uil-document-info',
        route: ['/', 'configuracion', 'ventas']
      },
      {
        name: ['Otros'],
        icon: 'uil uil-document-info',
        route: ['/', 'configuracion', 'otros']
      },
      {
        name: ['Utilidades'],
        icon: 'uil uil-document-info',
        route: ['/', 'configuracion', 'utilidades']
      },
    ]
  }
}
