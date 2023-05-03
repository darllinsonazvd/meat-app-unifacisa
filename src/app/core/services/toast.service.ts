import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toastNgxService: ToastrService) {}

  /**
   * @description Exibir mensagem de sucesso
   *
   * @author Darllinson Azevedo
   *
   * @param timeout Tempo de expiração da mensagem
   * @param title Título da mensagem
   * @param message Mensagem
   */
  public showSuccess(timeout: number, title: string, message: string) {
    this.toastNgxService.success(message, title, { timeOut: timeout });
  }

  /**
   * @description Exibir mensagem de erro
   *
   * @author Darllinson Azevedo
   *
   * @param timeout Tempo de expiração da mensagem
   * @param title Título da mensagem
   * @param message Mensagem
   */
  public showError(timeout: number, title: string, message: string) {
    this.toastNgxService.error(message, title, { timeOut: timeout });
  }
}
