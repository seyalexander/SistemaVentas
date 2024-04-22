import { Routes } from '@angular/router';
import { DashboardComponent } from './ui/modules/home/dashboard/layouts/dashboard/dashboard.component';
import { OpcionesMenuConfiguracionComponent } from './ui/modules/home/dashboard/layouts/opciones-menu-configuracion/opciones-menu-configuracion.component';
import { OpcionesMenuConfiguracionAvanzadaComponent } from './ui/modules/home/dashboard/layouts/opciones-menu-configuracion-avanzada/opciones-menu-configuracion-avanzada.component';
import { OpcionesMenuConfiguracionBasicaComponent } from './ui/modules/home/dashboard/layouts/opciones-menu-configuracion-basica/opciones-menu-configuracion-basica.component';
import { OpcionesMenuConfiguracionVentaComponent } from './ui/modules/home/dashboard/layouts/opciones-menu-configuracion-venta/opciones-menu-configuracion-venta.component';
import { OpcionesMenuConfiguracionOtrosComponent } from './ui/modules/home/dashboard/layouts/opciones-menu-configuracion-otros/opciones-menu-configuracion-otros.component';
import { OpcionesMenuConfiguracionUtilidadesComponent } from './ui/modules/home/dashboard/layouts/opciones-menu-configuracion-utilidades/opciones-menu-configuracion-utilidades.component';
import { ListadoClasificacionesComponent } from './ui/modules/home/configuration/clasificaciones/listado-clasificaciones/listado-clasificaciones.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'configuracion',
    component: OpcionesMenuConfiguracionComponent,
    children: [
      {
        path: '',
        component:OpcionesMenuConfiguracionBasicaComponent,
      },
      {
        path: 'avanzada',
        component:OpcionesMenuConfiguracionAvanzadaComponent,
      },
      {
        path: 'ventas',
        component:OpcionesMenuConfiguracionVentaComponent,
      },
      {
        path: 'otros',
        component:OpcionesMenuConfiguracionOtrosComponent,
      },
      {
        path: 'utilidades',
        component:OpcionesMenuConfiguracionUtilidadesComponent,
      }
    ]
  },
  //COMPONENTES DE CONFIGURACIÓN
  {
    path: 'configuracion/avanzada/clasificacion',
    component: ListadoClasificacionesComponent
  },
];
