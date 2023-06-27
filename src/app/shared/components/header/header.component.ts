import {
  AfterContentInit,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, AfterContentInit {
  public showShadow: boolean = false;
  public userSearch: string = '';
  public showClearInput: boolean = false;

  @Output() emitUserSearch = new EventEmitter<string>();
  @Output() cancelUserSearch = new EventEmitter<boolean>();

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
    this.showClearInput = true;
    this.emitUserSearch.emit(this.userSearch.trim());
  }

  /**
   * @description Cancelar busca do usuário
   *
   * @author Darllinson Azevedo
   */
  cancelSearch() {
    this.showClearInput = false;
    this.userSearch = '';
    this.cancelUserSearch.emit(false);
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
