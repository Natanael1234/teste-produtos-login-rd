import { Injectable } from '@angular/core';
import { DbService } from '../db.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public dbService: DbService) { }

  /** Recupera as credenciais de usuário do último login. */
  async getLogin() {
    return this.dbService.getLogin();
  }

  /** Efetua login. */
  async login(email: string, password: string) {
    if (email == 'user@email.com' && password == 'password') {
      let loginData = { email, name: 'Tom' };
      this.dbService.saveLogin(loginData);
      return loginData;
    }
  }

  logout() {
    this.dbService.removeLogin();
  }

}
