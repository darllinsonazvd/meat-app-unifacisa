import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CheckoutAnchorComponent } from './components/checkout-anchor/checkout-anchor.component';

@NgModule({
  declarations: [HeaderComponent, NavbarComponent, CheckoutAnchorComponent],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [HeaderComponent, NavbarComponent, CheckoutAnchorComponent],
})
export class SharedModule {}
