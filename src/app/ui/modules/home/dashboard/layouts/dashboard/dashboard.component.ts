import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../../shared/layouts/headers/header/header.component';
import { ButtonOpcionesDashboardComponent } from '../../components/buttons/button-opciones-dashboard/button-opciones-dashboard.component';
import { ButtonUsuarioDashboardComponent } from '../../components/buttons/button-usuario-dashboard/button-usuario-dashboard.component';

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

}
