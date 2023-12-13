// app/auth/auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import {AuthService} from "../../core/services/auth/auth.service";


@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.getAuthToken()) {
      return true; // Usuario autenticado, permitir el acceso
    } else {
      // Usuario no autenticado, redirigir a la página de inicio de sesión
      this.router.navigate(['/login']);
      return false;
    }
  }
}
