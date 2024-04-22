import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opciones-menu-configuracion-basica',
  standalone: true,
  imports: [],
  templateUrl: './opciones-menu-configuracion-basica.component.html',
  styleUrl: './opciones-menu-configuracion-basica.component.css'
})
export class OpcionesMenuConfiguracionBasicaComponent {
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
        name: ['Datos básicos'],
        icon: 'uil uil-document-info',
        listaOpciones: [
          {
            listaOpcionItemIcon: 'uil uil-document-info',
            listaOpcionItemNombre: ['Modelo'],
            listaOpcionItemRoute: ['/', 'venta']
          },
          {
            listaOpcionItemIcon: 'uil uil-document-info',
            listaOpcionItemNombre: ['Regiones'],
            listaOpcionItemRoute: ['/', 'venta']
          },
        ]
      },
      {
        name: ['Dispositivos'],
        icon: 'uil uil-document-info',
        listaOpciones: [
          {
            listaOpcionItemIcon: 'uil uil-document-info',
            listaOpcionItemNombre: ['Impresoras'],
            listaOpcionItemRoute: ['/', 'venta']
          },
          {
            listaOpcionItemIcon: 'uil uil-document-info',
            listaOpcionItemNombre: ['Impresoras'],
            listaOpcionItemRoute: ['/', 'venta']
          },
        ]
      },
      {
        name: ['Mantenimiento'],
        icon: 'uil uil-document-info',
        listaOpciones: [
          {
            listaOpcionItemIcon: 'uil uil-document-info',
            listaOpcionItemNombre: ['Datos empresa'],
            listaOpcionItemRoute: ['/', 'venta']
          },
          {
            listaOpcionItemIcon: 'uil uil-document-info',
            listaOpcionItemNombre: ['Divisas'],
            listaOpcionItemRoute: ['/', 'venta']
          },
          {
            listaOpcionItemIcon: 'uil uil-document-info',
            listaOpcionItemNombre: ['Impuestos'],
            listaOpcionItemRoute: ['/', 'venta']
          },
          {
            listaOpcionItemIcon: 'uil uil-document-info',
            listaOpcionItemNombre: ['Medios de pago'],
            listaOpcionItemRoute: ['/', 'venta']
          },
          {
            listaOpcionItemIcon: 'uil uil-document-info',
            listaOpcionItemNombre: ['Usuarios'],
            listaOpcionItemRoute: ['/', 'venta']
          },
          {
            listaOpcionItemIcon: 'uil uil-document-info',
            listaOpcionItemNombre: ['Cambiar contraseña'],
            listaOpcionItemRoute: ['/', 'venta']
          },
          {
            listaOpcionItemIcon: 'uil uil-document-info',
            listaOpcionItemNombre: ['Idiomas de texto'],
            listaOpcionItemRoute: ['/', 'venta']
          },
          {
            listaOpcionItemIcon: 'uil uil-document-info',
            listaOpcionItemNombre: ['Tipos de ticket'],
            listaOpcionItemRoute: ['/', 'venta']
          },
          {
            listaOpcionItemIcon: 'uil uil-document-info',
            listaOpcionItemNombre: ['Tipos de servicios'],
            listaOpcionItemRoute: ['/', 'venta']
          },
        ]
      },
    ]
  }
}
