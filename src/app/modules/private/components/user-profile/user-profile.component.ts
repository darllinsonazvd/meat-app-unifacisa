import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/core/models/user.model';
import { LoginService } from 'src/app/core/services/login.service';

interface MenuOptionsModel {
  icon: string;
  name: string;
  url: string;
}

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
      icon: 'assets/img/profile/address.svg',
      name: 'Meus endereços',
      url: '/private/addresses',
    },
    {
      icon: 'assets/img/profile/sign-out.svg',
      name: 'Sair',
      url: '/home',
    },
  ];

  constructor(private loginService: LoginService) {}

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
}
