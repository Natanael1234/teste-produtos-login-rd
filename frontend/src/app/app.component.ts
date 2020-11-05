import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationEnd, NavigationStart, NavigationError, Event } from '@angular/router';
import { LoginService } from './services/login/login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /** Nome da página/rota atual. */
  currentRoute: string;
  /** Dados do formulário de login. */
  loginForm = new FormGroup({
    email: new FormControl('', { validators: [Validators.email, Validators.minLength(1)], updateOn: 'blur' }),
    password: new FormControl('', { validators: [Validators.minLength(6)], updateOn: 'blur' })
  });

  /** Se houve falha no login. */
  loginError: boolean = false;
  /** Dados do usuário logado. */
  loginData: { email: string, name: string };

  constructor(private router: Router, public loginService: LoginService) {
    console.log(router.url);

    // recupera dados do usuário, se este efetuou login anteriormente.
    this.loginService.getLogin().then((loginData) => {
      this.loginData = loginData;
    });

    // observa mudanças na rota para mudar o nome da página no cabeçalho
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        let tokens = event.urlAfterRedirects.split('/');
        let route = tokens.length ? tokens[tokens.length - 1] : '';
        this.currentRoute = route && route.length ? route.charAt(0).toUpperCase() + route.slice(1) : '';
      }
    });
  }

  /** Efetua login com os dados do formulário de login. */
  async login(event: any) {
    // evita o recarregamento da página
    event.preventDefault();
    // efetua login na API
    let loginData = await this.loginService.login(
      this.loginForm.controls.email.value,
      this.loginForm.controls.password.value
    );
    if (loginData) {
      this.loginData = loginData;
      this.resetLogin();
    } else {
      this.loginData = null;
      this.loginError = true;
    }
  }

  /** Limpa o formulário de login. */
  resetLogin() {
    this.loginForm.controls.email.reset();
    this.loginForm.controls.password.reset();
    this.loginForm.reset();
    this.loginError = false;
  }

  logout() {
    this.loginService.logout();
    this.loginData = null;
    this.resetLogin();
  }

  /** Navega para a tela inicial. */
  navigateToHome() {
    this.router.navigate(['']);
  }

}
