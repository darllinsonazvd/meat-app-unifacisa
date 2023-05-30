import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/core/models/user.model';
import { LoginService } from 'src/app/core/services/login.service';
import { Input, Ripple, initTE } from 'tw-elements';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  public registerForm = new FormGroup({
    name: new FormControl<string>('', {
      validators: [Validators.required, Validators.minLength(3)],
    }),
    email: new FormControl<string>('', {
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl<string>('', {
      validators: [Validators.required, Validators.minLength(6)],
    }),
    passwordConfirmation: new FormControl<string>('', {
      validators: [Validators.required, Validators.minLength(6)],
    }),
  });

  public passwordValue: string = '';
  public confirmPasswordValue: string = '';
  public passwordsNotMatching: boolean = false;
  public passwordLessThanSixCharacters: boolean = false;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {
    initTE({ Input, Ripple });
  }

  /**
   * @description Validar senha do usuário
   *
   * @author Darllinson Azevedo
   */
  passwordInvalid() {
    this.passwordsNotMatching =
      this.passwordValue !== this.confirmPasswordValue ? true : false;
    this.passwordLessThanSixCharacters =
      this.passwordValue.length < 6 ? true : false;
  }

  /**
   * @description Cadastrar usuário na aplicação
   *
   * @author Darllinson Azevedo
   */
  register() {
    const registerForm = this.registerForm.getRawValue();
    const user: UserModel = {
      name: registerForm.name ?? '',
      email: registerForm.email ?? '',
      password: registerForm.password ?? '',
    };

    this.loginService.register(user);

    this.router.navigate(['/login']);
  }
}
