import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button-opciones-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './button-opciones-dashboard.component.html',
  styleUrl: './button-opciones-dashboard.component.css'
})
export class ButtonOpcionesDashboardComponent {
  @Input() icon: string = '';
  @Input() Title: string = '';
  @Input() Description: string = '';
}
