import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {AuthService} from "../auth/auth.service";
import {DocumentType, Entity, PageResponse, PaginationRequest} from "../../models/dto/dto";

@Injectable({
  providedIn: 'root'
})
export class DocumentTypeService {
  private apiUrl = 'document-type/all';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getDocumentTypes(paginationRequest: PaginationRequest){
    const url = `${environment.baseUrl}${this.apiUrl}?page=${paginationRequest.page}&size=${paginationRequest.size}&sort=${paginationRequest.sort.join(',')}`;

    const authToken = this.authService.getAuthToken();

    const headers = authToken
      ? new HttpHeaders({
        'Authorization': `Bearer ${authToken}`,
      })
      : undefined;

    return this.http.get<PageResponse>(url//, { headers }
    );
  }

  getAllDocumentTypes(): Observable<any> {
    const url = `${environment.baseUrl}${this.apiUrl}`;

    const authToken = this.authService.getAuthToken();

    const headers = authToken
      ? new HttpHeaders({
        'Authorization': `Bearer ${authToken}`,
      })
      : undefined;

    return this.http.get(url //, { headers }
     );
  }

  updateDocumentType(documentType: DocumentType): Observable<any> {

    const updateUrl = `${environment.baseUrl}document-type/${documentType.id}`;

    const authToken = this.authService.getAuthToken();
    const headers = authToken
      ? new HttpHeaders({
        'Authorization': `Bearer ${authToken}`,
      })
      : undefined;

    return this.http.put<Entity>(updateUrl, documentType //, { headers }
    );

  }

}
