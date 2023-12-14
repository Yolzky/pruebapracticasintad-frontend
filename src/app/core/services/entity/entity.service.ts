import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Entity, PageResponse, PaginationRequest} from "../../models/dto/dto";
import { environment } from "../../../../environments/environment";
import { AuthService } from "../auth/auth.service";

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

    // Configura las cabeceras con el token si está presente
    const headers = authToken
      ? new HttpHeaders({
        'Authorization': `Bearer ${authToken}`,
      })
      : undefined;

    return this.http.get<PageResponse>(url//, { headers }
    );
  }

  updateEntity(entity: Entity): Observable<Entity> {
    // Puedes ajustar la URL según tu endpoint de actualización
    const updateUrl = `${environment.baseUrl}entity/${entity.id}`;

    const authToken = this.authService.getAuthToken();
    const headers = authToken
      ? new HttpHeaders({
        'Authorization': `Bearer ${authToken}`,
      })
      : undefined;

    return this.http.put<Entity>(updateUrl, entity //, { headers }
    );
  }
}
