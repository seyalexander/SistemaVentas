import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opciones-menu-configuracion-utilidades',
  standalone: true,
  imports: [],
  templateUrl: './opciones-menu-configuracion-utilidades.component.html',
  styleUrl: './opciones-menu-configuracion-utilidades.component.css'
})
export class OpcionesMenuConfiguracionUtilidadesComponent {
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
        name: ['Borrado de información'],
        icon: 'uil uil-document-info',
        listaOpciones: [
          {
            listaOpcionItemIcon: 'uil uil-document-info',
            listaOpcionItemNombre: ['Vaciado de datos de ventas'],
            listaOpcionItemRoute: ['/', 'venta']
          },
          {
            listaOpcionItemIcon: 'uil uil-document-info',
            listaOpcionItemNombre: ['Vaciado de base de datos'],
            listaOpcionItemRoute: ['/', 'venta']
          },
        ]
      },
      {
        name: ['Copias de seguridad'],
        icon: 'uil uil-document-info',
        listaOpciones: [
          {
            listaOpcionItemIcon: 'uil uil-document-info',
            listaOpcionItemNombre: ['Copia de seguridad'],
            listaOpcionItemRoute: ['/', 'venta']
          },
        ]
      },
    ]
  }
}
