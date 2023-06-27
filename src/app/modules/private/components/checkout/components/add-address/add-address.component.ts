import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Input, Ripple, initTE } from 'tw-elements';
import { AddressModel } from './models/address.model';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { LocalStorageKeys } from 'src/app/core/enums/local-storage-keys.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
})
export class AddAddressComponent implements OnInit {
  public addressForm = new FormGroup({
    neighborhood: new FormControl<string>('', {
      validators: [Validators.required],
    }),
    street: new FormControl<string>('', { validators: [Validators.required] }),
    number: new FormControl<string>(''),
    complement: new FormControl<string>(''),
    reference: new FormControl<string>(''),
    name: new FormControl<string>('', {
      validators: [Validators.required],
    }),
    lastName: new FormControl<string>('', {
      validators: [Validators.required],
    }),
    phoneNumber: new FormControl<string>('', {
      validators: [Validators.required, Validators.minLength(11)],
    }),
  });

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit() {
    initTE({ Input, Ripple });
  }

  /**
   * @description Salvar endereço do usuário
   *
   * @author Darllinson Azevedo
   */
  save() {
    const addressRaw = this.addressForm.getRawValue();
    const address: AddressModel = {
      neighborhood: addressRaw.neighborhood || '',
      street: addressRaw.street || '',
      number: addressRaw.number,
      complement: addressRaw.complement,
      reference: addressRaw.reference,
      name: addressRaw.name || '',
      lastName: addressRaw.lastName || '',
      phoneNumber: addressRaw.phoneNumber || '',
    };

    this.localStorageService.storage(
      LocalStorageKeys.USER_ADDRESS,
      JSON.stringify(address)
    );
    this.router.navigate(['/private/checkout']);
  }
}
