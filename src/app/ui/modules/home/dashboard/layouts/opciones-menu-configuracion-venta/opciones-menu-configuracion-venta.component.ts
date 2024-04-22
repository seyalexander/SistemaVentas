import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opciones-menu-configuracion-venta',
  standalone: true,
  imports: [],
  templateUrl: './opciones-menu-configuracion-venta.component.html',
  styleUrl: './opciones-menu-configuracion-venta.component.css'
})
export class OpcionesMenuConfiguracionVentaComponent {
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
        name: ['Productos y precios'],
        icon: 'uil uil-document-info',
        listaOpciones: [
          {
            listaOpcionItemIcon: 'uil uil-document-info',
            listaOpcionItemNombre: ['Artículos'],
            listaOpcionItemRoute: ['/', 'venta']
          },
          {
            listaOpcionItemIcon: 'uil uil-document-info',
            listaOpcionItemNombre: ['Tarifas'],
            listaOpcionItemRoute: ['/', 'venta']
          },
          {
            listaOpcionItemIcon: 'uil uil-document-info',
            listaOpcionItemNombre: ['Tarifas Adv.'],
            listaOpcionItemRoute: ['/', 'venta']
          },
        ]
      },
      {
        name: ['Zonas y Mesas'],
        icon: 'uil uil-document-info',
        listaOpciones: [
          {
            listaOpcionItemIcon: 'uil uil-document-info',
            listaOpcionItemNombre: ['Zonas y Mesas'],
            listaOpcionItemRoute: ['/', 'venta']
          },
        ]
      },
    ]
  }
}
