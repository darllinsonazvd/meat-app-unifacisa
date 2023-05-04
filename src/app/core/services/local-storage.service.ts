import { Injectable } from '@angular/core';
import { LocalStorageKeys } from '../enums/local-storage-keys.enum';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  /**
   * @description Armazenar valor no localStorage
   *
   * @author Darllinson Azevedo
   *
   * @param key Chave do item
   * @param value Valor a ser armazenado
   */
  storage(key: LocalStorageKeys, value: string): void {
    localStorage.setItem(key, value);
  }

  /**
   * @description Recuperar item do localStorage
   *
   * @author Darllinson Azevedo
   *
   * @param key Chave do item
   * @returns Item recuperado
   */
  getItem(key: LocalStorageKeys): string | null {
    return localStorage.getItem(key);
  }

  /**
   * @description Limpar todo o localStorage
   *
   * @author Darllinson Azevedo
   */
  clear(): void {
    localStorage.clear();
  }
}
