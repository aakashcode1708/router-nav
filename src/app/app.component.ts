import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  email: string;
  password: string;
  role = null;
  title = 'router-nav';
  constructor(private router: Router) {}
  onSubmit() {
    if (this.email == 'aakash@gmail.com' && this.password == 'aakashsingh') {
      this.role = 'user';
    }
    if (this.email == 'admin@gmail.com' && this.password == 'admin') {
      this.role = 'admin';
    }
    if (this.email == 'superadmin@gmail.com' && this.password == 'superadmin') {
      this.role = 'superadmin';
    }
  }
}
