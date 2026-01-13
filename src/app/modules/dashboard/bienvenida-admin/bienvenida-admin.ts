import { AuthService } from './../../../services/auth';
import { Component } from '@angular/core';
import { Login } from '../../auth/login/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bienvenida-admin',
  standalone: false,
  templateUrl: './bienvenida-admin.html',
  styleUrl: './bienvenida-admin.css',
})
export class BienvenidaAdmin {
  constructor(private AuthService : AuthService, private router : Router ) {}

  cerrarSesion() {
    this.AuthService.logout().then(() => {
      this.router.navigate(['/login']);
    });
  }
}
