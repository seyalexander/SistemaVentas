import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-opciones-menu-configuracion-avanzada',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './opciones-menu-configuracion-avanzada.component.html',
  styleUrl: './opciones-menu-configuracion-avanzada.component.css'
})
export class OpcionesMenuConfiguracionAvanzadaComponent {
  mainMenu: {
    defaultOptions: Array<any>
    accessLink: Array<any>
  } = {
    defaultOptions: [],
    accessLink: [],
  };

  constructor(private router: Router) {}

  ngOnInit(): void {

    this.mainMenu.defaultOptions = [
      {
        name: 'Básica',
        icon: 'uil uil-estate',
        route: ['/'],
      },
    ];

    this.mainMenu.accessLink = [
      {
        name: ['Opciones'],
        icon: 'uil uil-document-info',
        listaOpciones: [
          {
            listaOpcionItemIcon: 'uil uil-document-info',
            listaOpcionItemNombre: ['Diferenciaciones'],
            listaOpcionItemRoute: ['/', 'venta']
          },
          {
            listaOpcionItemIcon: 'uil uil-document-info',
            listaOpcionItemNombre: ['Clasificaciones'],
            listaOpcionItemRoute: ['/', 'configuracion', 'avanzada', 'clasificacion']
          },
          {
            listaOpcionItemIcon: 'uil uil-document-info',
            listaOpcionItemNombre: ['Modificadores'],
            listaOpcionItemRoute: ['/', 'venta']
          },
          {
            listaOpcionItemIcon: 'uil uil-document-info',
            listaOpcionItemNombre: ['Packs'],
            listaOpcionItemRoute: ['/', 'venta']
          },
          {
            listaOpcionItemIcon: 'uil uil-document-info',
            listaOpcionItemNombre: ['Grupo de producción'],
            listaOpcionItemRoute: ['/', 'venta']
          },
        ]
      },

    ]
  }
}
