import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {catchError, tap} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authTokenKey = 'authToken';
  private authToken: string | null = null;

  constructor(private http: HttpClient) {
    this.authToken = localStorage.getItem(this.authTokenKey);
  }

  login(email: string, password: string): Observable<any> {
    const credentials = {email, password};

    return this.http
      .post(environment.baseUrl + 'auth/login', credentials, {observe: 'response'})
      .pipe(
        tap((response: HttpResponse<any>) => {


          const token = response.body.token;
          console.log('Token de autenticación:', token);
          this.setAuthToken(token);
        }),
        catchError((error) => {
          console.error('Error en la solicitud de inicio de sesión', error);

          const errorMessage = (error && error.error && error.error.message) ? error.error.message : 'An error occurred';

          return throwError(errorMessage);
        })
      );
  }

  setAuthToken(token: string): void {
    console.log('Token de autenticación seteado:', token);
    this.authToken = token;
    localStorage.setItem(this.authTokenKey, token);
  }

  getAuthToken(): string | null {
    return this.authToken;
  }

  clearAuthToken(): void {
    this.authToken = null;
    localStorage.removeItem(this.authTokenKey);
  }
}
