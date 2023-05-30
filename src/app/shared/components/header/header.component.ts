import { AfterContentInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, AfterContentInit {
  public showShadow: boolean = false;
  public userSearch: string = '';

  constructor() {}

  ngOnInit() {}

  ngAfterContentInit() {
    this.showHeaderShadow();
  }

  /**
   * @description Realizar busca do usuário
   *
   * @author Darllinson Azevedo
   */
  handleSearch() {
    alert(`Busca: ${this.userSearch.trim()}`);
  }

  /**
   * @description Controlar exibição da sombra no header
   *
   * @author Darllinson Azevedo
   */
  showHeaderShadow() {
    window.addEventListener(
      'scroll',
      () => (this.showShadow = window.scrollY > 100 ? true : false)
    );
  }
}
