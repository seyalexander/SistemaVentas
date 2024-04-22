import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opciones-menu-configuracion-otros',
  standalone: true,
  imports: [],
  templateUrl: './opciones-menu-configuracion-otros.component.html',
  styleUrl: './opciones-menu-configuracion-otros.component.css'
})
export class OpcionesMenuConfiguracionOtrosComponent {
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
        name: ['Generales'],
        icon: 'uil uil-document-info',
        listaOpciones: [
          {
            listaOpcionItemIcon: 'uil uil-document-info',
            listaOpcionItemNombre: ['Descuentos'],
            listaOpcionItemRoute: ['/', 'venta']
          },
          {
            listaOpcionItemIcon: 'uil uil-document-info',
            listaOpcionItemNombre: ['Clientes'],
            listaOpcionItemRoute: ['/', 'venta']
          },
          {
            listaOpcionItemIcon: 'uil uil-document-info',
            listaOpcionItemNombre: ['Proveedores'],
            listaOpcionItemRoute: ['/', 'venta']
          },
          {
            listaOpcionItemIcon: 'uil uil-document-info',
            listaOpcionItemNombre: ['Parámetros adicionales'],
            listaOpcionItemRoute: ['/', 'venta']
          },
        ]
      },
      {
        name: ['Propinas y recargos'],
        icon: 'uil uil-document-info',
        listaOpciones: [
          {
            listaOpcionItemIcon: 'uil uil-document-info',
            listaOpcionItemNombre: ['Propinas'],
            listaOpcionItemRoute: ['/', 'venta']
          },
        ]
      },
      {
        name: ['Parámetros adicionales'],
        icon: 'uil uil-document-info',
        listaOpciones: [
          {
            listaOpcionItemIcon: 'uil uil-document-info',
            listaOpcionItemNombre: ['Parámetros adicionales'],
            listaOpcionItemRoute: ['/', 'venta']
          },
        ]
      },
    ]
  }
}
