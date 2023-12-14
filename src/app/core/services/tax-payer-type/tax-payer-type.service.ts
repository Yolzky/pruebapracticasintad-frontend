// app/tax-payer-type.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TaxPayerTypeService {
  private apiUrl = 'tax-payer-type/all';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getAllTaxPayerTypes(): Observable<any> {
    const url = `${environment.baseUrl}${this.apiUrl}`;

    // Obtén el token de autenticación almacenado
    const authToken = this.authService.getAuthToken();

    // Configura las cabeceras con el token si está presente
    const headers = authToken
      ? new HttpHeaders({
        'Authorization': `Bearer ${authToken}`,
      })
      : undefined;

    return this.http.get(url//, { headers }
    );
  }
}
