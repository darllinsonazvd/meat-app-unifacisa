import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { ToastService } from './toast.service';
import { LocalStorageService } from './local-storage.service';
import { LocalStorageKeys } from '../enums/local-storage-keys.enum';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private users: UserModel[] = JSON.parse(
    this.localStorageService.getItem(LocalStorageKeys.USERS_LIST) ||
      `[{
          "name": "Hugo Vieira",
          "email": "admin@gmail.com",
          "password": "admin123"
        }]`
  );
  public userAuthenticated: UserModel | null = JSON.parse(
    this.localStorageService.getItem(LocalStorageKeys.USER_AUTHENTICATED) ||
      'null'
  );

  constructor(
    private toastService: ToastService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  /**
   * @description Autenticar usuário na aplicação
   *
   * @author Darllinson Azevedo
   *
   * @param email Email do usuário
   * @param password Senha do usuário
   * @returns Model do usuário
   */
  login(email: string, password: string) {
    const user = this.users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      this.localStorageService.storage(
        LocalStorageKeys.USER_AUTHENTICATED,
        JSON.stringify(user)
      );
      this.userAuthenticated = user;

      return user;
    } else {
      return null;
    }
  }

  /**
   * @description Cadastrar usuário na aplicação
   *
   * @author Darllinson Azevedo
   *
   * @param user Model com os dados do usuário
   */
  register(user: UserModel) {
    this.users.push(user);

    this.localStorageService.storage(
      LocalStorageKeys.USERS_LIST,
      JSON.stringify(this.users)
    );

    this.toastService.showSuccess(
      3000,
      'Usuário cadastrado com sucesso!',
      'Faça seu login'
    );
  }

  /**
   * @description Desconectar usuário da aplicação
   *
   * @author Darllinson Azevedo
   */
  logout() {
    this.userAuthenticated = null;
    this.localStorageService.storage(
      LocalStorageKeys.USER_AUTHENTICATED,
      JSON.stringify(this.userAuthenticated)
    );
    this.router.navigate(['/login']);
  }
}
