import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { PublicRoutingModule } from './public-routing.module';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  imports: [CommonModule, PublicRoutingModule],
  declarations: [LoginComponent, RegisterComponent],
})
export class PublicModule {}
