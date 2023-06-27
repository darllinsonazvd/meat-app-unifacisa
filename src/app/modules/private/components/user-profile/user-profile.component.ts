import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/core/models/user.model';
import { LoginService } from 'src/app/core/services/login.service';
import { MenuOptionsModel } from './models/menu-options.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
})
export class UserProfileComponent implements OnInit {
  public menuOptions: MenuOptionsModel[] = [
    {
      icon: 'assets/img/profile/orders.svg',
      name: 'Meus pedidos',
      url: '/private/orders',
    },
    {
      icon: 'assets/img/profile/sign-out.svg',
      name: 'Sair',
      url: '/login',
    },
  ];

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {}

  /**
   * @description Recuperar informações do usuário autenticado
   *
   * @author Darllinson Azevedo
   *
   * @returns Informações do usuário autenticado
   */
  getUserInfo(): UserModel | null {
    return this.loginService.userAuthenticated;
  }

  /**
   * @description Redirecionar usuário para a URL especificada
   *
   * @author Darllinson Azevedo
   *
   * @param url URL do card
   */
  navigateByUrl(url: string) {
    if (url === '/login') this.logout();
    else this.router.navigate([`${url}`]);
  }

  /**
   * @description Desconectar usuário da aplicação
   *
   * @author Darllinson Azevedo
   */
  logout() {
    this.loginService.logout();
  }
}
