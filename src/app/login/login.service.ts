import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  login({ username, password }: { username: string; password: string }) {
    if (username && password) {
      return of(true);
    }
    return of(false);
  }
}
