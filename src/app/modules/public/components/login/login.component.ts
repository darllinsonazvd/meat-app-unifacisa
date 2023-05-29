import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { Input, Ripple, initTE } from 'tw-elements';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  public loginForm = new FormGroup({
    email: new FormControl<string>('', { validators: Validators.required }),
    password: new FormControl<string>('', { validators: Validators.required }),
  });

  constructor(
    private loginService: LoginService,
    private router: Router,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    initTE({ Input, Ripple });
  }

  /**
   * @description Autenticar usuário na aplicação
   *
   * @author Darllinson Azevedo
   */
  login() {
    const loginForm = this.loginForm.getRawValue();

    const user = this.loginService.login(
      loginForm.email ?? '',
      loginForm.password ?? ''
    );

    if (user) {
      this.router.navigate(['/private/home']);
    } else {
      this.toastService.showError(3000, 'Usuário ou senha inválidos!', '');
    }
  }
}
