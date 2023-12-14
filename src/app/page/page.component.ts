// app/page/page.component.ts
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
    // Lógica para el botón Tipo Documento
    console.log('Botón Tipo Documento clickeado');
    // Verifica si el usuario está autenticado antes de redirigir
    console.log('token', this.authService.getAuthToken());
    if (this.authService.getAuthToken()) {
      // Lógica para el botón Entidad
      this.router.navigate(['/document-type']);
      console.log('Botón Tipo Documento clickeado');
    } else {
      // Puedes manejar el caso en que el usuario no está autenticado, por ejemplo, redirigiéndolo a la página de inicio de sesión.
      console.log('Usuario no autenticado. Redirigiendo a la página de inicio de sesión.');
      this.router.navigate(['/login']);
    }
  }

  entidad() {
    // Verifica si el usuario está autenticado antes de redirigir
    console.log('token', this.authService.getAuthToken());
    if (this.authService.getAuthToken()) {
      // Lógica para el botón Entidad
      this.router.navigate(['/entity']);
      console.log('Botón Entidad clickeado');
    } else {
      // Puedes manejar el caso en que el usuario no está autenticado, por ejemplo, redirigiéndolo a la página de inicio de sesión.
      console.log('Usuario no autenticado. Redirigiendo a la página de inicio de sesión.');
      this.router.navigate(['/login']);
    }
  }

  tipoContribuyente() {
    // Lógica para el botón Tipo Contribuyente
    console.log('Botón Tipo Contribuyente clickeado');
    if (this.authService.getAuthToken()) {
      // Lógica para el botón Entidad
      this.router.navigate(['/tax-payer-type']);
      console.log('Botón Tipo Contribuyente clickeado');
    } else {
      // Puedes manejar el caso en que el usuario no está autenticado, por ejemplo, redirigiéndolo a la página de inicio de sesión.
      console.log('Usuario no autenticado. Redirigiendo a la página de inicio de sesión.');
      this.router.navigate(['/login']);
    }
  }
}
