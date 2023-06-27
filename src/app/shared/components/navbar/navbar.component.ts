import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  public homeIsActive: boolean = false;
  public myOrdersIsActive: boolean = false;
  public userProfileIsActive: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.homeIsActive = this.router.isActive('/private/home', true);
    this.myOrdersIsActive = this.router.isActive('/private/orders', true);
    this.userProfileIsActive = this.router.isActive('/private/profile', true);
  }
}
