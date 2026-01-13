import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { AuthService } from './../../../services/auth'; // 1. Cambiado a AuthService

@Component({
  selector: 'app-registrar',
  standalone: false,
  templateUrl: './registrar.html',
  styleUrl: './registrar.css',
})
export class Registrar {
  email: string = '';
  password: string = '';

  // 2. Cambiado el tipo de dato a AuthService
  constructor(private authService: AuthService, private router: Router) {}

  registrar() {
    this.authService
    .registrar(this.email, this.password)
    .then((user) => {
      console.log('Registro exitoso', user.user?.email);
      // Opcional: Redirigir al login o al dashboard tras registrarse
      this.router.navigate(['/login']); 
    })
    .catch((error) => {
      console.error('Error en registro', error);
    });
  }
}