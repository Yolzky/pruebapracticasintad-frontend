import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';
import {PageResponse, PaginationRequest} from "../../models/dto/dto";

@Injectable({
  providedIn: 'root'
})
export class TaxPayerTypeService {
  private apiUrl = 'tax-payer-type/all';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getTaxPayerTypes(paginationRequest: PaginationRequest){
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

  getAllTaxPayerTypes(): Observable<any> {
    const url = `${environment.baseUrl}${this.apiUrl}`;

    const authToken = this.authService.getAuthToken();

    const headers = authToken
      ? new HttpHeaders({
        'Authorization': `Bearer ${authToken}`,
      })
      : undefined;

    return this.http.get(url//, { headers }
    );
  }

  updateTaxPayerType(taxPayerType: any): Observable<any> {

    const updateUrl = `${environment.baseUrl}tax-payer-type/${taxPayerType.id}`;

    const authToken = this.authService.getAuthToken();
    const headers = authToken
      ? new HttpHeaders({
        'Authorization': `Bearer ${authToken}`,
      })
      : undefined;

    return this.http.put<any>(updateUrl, taxPayerType//, { headers }
    );

  }


}
