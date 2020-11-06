import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  /** Se houve falha no login. */
  @Input() loginError: boolean = false;
  /** Evento enviar do formulário de login. */
  @Output() onSubmit = new EventEmitter<{ email: string, password: string }>();

  /** Dados do formulário de login. */
  form = new FormGroup({
    email: new FormControl('', { validators: [Validators.email, Validators.minLength(1)], updateOn: 'change' }),
    password: new FormControl('', { validators: [Validators.minLength(6)], updateOn: 'change' })
  });

  constructor() { }

  /** Dispara o evento de envio de formulário. */
  fireOnSubmit(event: any) {
    // evita o recarregamento da página
    event.preventDefault();
    let { email, password } = this.form.getRawValue();
    this.onSubmit.next({ email, password });
  }

}
