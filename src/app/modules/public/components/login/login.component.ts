import { Component, OnInit } from '@angular/core';
import { Input, Ripple, initTE } from 'tw-elements';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    initTE({ Input, Ripple });
  }
}
