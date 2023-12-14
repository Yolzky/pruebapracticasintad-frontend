import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;


  constructor(
    private _router: Router,
    private _authService: AuthService,
    private _fb: FormBuilder,
    private _toastr: ToastrService
  ) {}

  ngOnInit() {
    this.loginForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  submit() {
    if (this.loginForm.valid) {

      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      this._authService.login(email, password)
        .subscribe({
          next: (res: any) => {
            if (res.status === 200) {
              const token = res.token;
              this._authService.setAuthToken(token);
              this._toastr.success('Login is Successful', 'Success');

            }
          }
        ,
        error: (err: any) => {
          console.log('Error object:', err);
          const errorMessage = (err && err.error && err.error.message) ? err.error.message : 'An error occurred';
          this._toastr.error(errorMessage, 'Error');
        },
        complete: () => {
          console.log('API call completed.');
          this._router.navigate(['/dashboard']);
        }
      });
    }
  }

}
