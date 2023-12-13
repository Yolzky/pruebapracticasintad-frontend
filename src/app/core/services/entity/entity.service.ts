// app/entity/entity.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PageResponse, PaginationRequest } from "../../models/dto/dto";
import { environment } from "../../../../environments/environment";
import {AuthService} from "../auth/auth.service";

@Injectable({
  providedIn: 'root',
})
export class EntityService {
  private apiUrl = 'entity/all';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getEntities(paginationRequest: PaginationRequest): Observable<PageResponse> {
    const url = `${environment.baseUrl}${this.apiUrl}?page=${paginationRequest.page}&size=${paginationRequest.size}&sort=${paginationRequest.sort.join(',')}`;

    // Obtén el token de autenticación almacenado
    const authToken = this.authService.getAuthToken();

    // Configura las cabeceras con el token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`,
    });

    return this.http.get<PageResponse>(url, { headers });
  }
}
