import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateComponent } from './private.component';
import { PrivateRoutingModule } from './private-routing.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  imports: [CommonModule, PrivateRoutingModule],
  declarations: [PrivateComponent, HomeComponent],
})
export class PrivateModule {}
