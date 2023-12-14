import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "../core/services/auth/auth.service";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {

  constructor(private router: Router, private authService: AuthService) {}

  tipoDocumento() {
    console.log('Botón Tipo Documento clickeado');
    console.log('token', this.authService.getAuthToken());
    if (this.authService.getAuthToken()) {
      this.router.navigate(['/document-type']);
      console.log('Botón Tipo Documento clickeado');
    } else {
      console.log('Usuario no autenticado. Redirigiendo a la página de inicio de sesión.');
      this.router.navigate(['/login']);
    }
  }

  entidad() {
    console.log('token', this.authService.getAuthToken());
    if (this.authService.getAuthToken()) {
      this.router.navigate(['/entity']);
      console.log('Botón Entidad clickeado');
    } else {
      console.log('Usuario no autenticado. Redirigiendo a la página de inicio de sesión.');
      this.router.navigate(['/login']);
    }
  }

  tipoContribuyente() {
    console.log('Botón Tipo Contribuyente clickeado');
    if (this.authService.getAuthToken()) {
      this.router.navigate(['/tax-payer-type']);
      console.log('Botón Tipo Contribuyente clickeado');
    } else {
      console.log('Usuario no autenticado. Redirigiendo a la página de inicio de sesión.');
      this.router.navigate(['/login']);
    }
  }
}
