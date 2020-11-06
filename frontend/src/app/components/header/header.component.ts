import { Component, Input } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  /** Se houve erro ao efetuar o login. */
  loginError: boolean = false;

  /** Nome da página/rota atualmente selecionada. */
  @Input() pageName: string;

  /** Dados do login */
  loginData: { email: string, name: string };

  constructor(public router: Router, public loginService: LoginService) {

  }

  /** Navega para a tela principal. */
  navigateToHome() {
    this.router.navigate(['']);
  }

  ngOnInit() {
    this.recoverLogin();
    // observa mudanças na rota para mudar o nome da página no cabeçalho
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        let tokens = event.urlAfterRedirects.split('/');
        let route = tokens.length ? tokens[tokens.length - 1] : '';
        this.pageName = route && route.length ? route.charAt(0).toUpperCase() + route.slice(1) : '';
      }
    });
  }

  async recoverLogin() {
    this.loginData = await this.loginService.getLogin();
  }

  /** Efetua login com os dados do formulário de login. */
  async login(loginData: { email: string, password: string }) {
    // efetua login na API
    this.loginData = await this.loginService.login(loginData.email, loginData.password);
    this.loginError = !this.loginData;
  }

  /** Efetua logout. */
  logout() {
    console.log('logout')
    this.loginService.logout();
    this.loginData = null;
    this.loginError = false;
  }
}
