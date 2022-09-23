import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../shared/base.component';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends BaseComponent {
  username = '';
  password = '';
  errorMessage = '';
  private loginService: LoginService;
  private router: Router;
  constructor() {
    super();
    this.loginService = inject(LoginService);
    this.router = inject(Router);
  }

  async login() {
    if (!(!!this.username && !!this.password)) {
      this.errorMessage = 'Please fill all fields';
      return;
    }
    this.addSafeSubscriber(
      this.loginService.login({
        username: this.username,
        password: this.password,
      }),
      (result: boolean) => {
        if (result) {
          this.router.navigateByUrl('/home');
        } else {
          this.errorMessage = 'Invalid Login';
        }
      }
    );
  }
}
