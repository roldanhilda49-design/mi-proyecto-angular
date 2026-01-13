import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth'; 

@Component({
  selector: 'app-bienvenida-usuario',
  standalone: false,
  templateUrl: './bienvenida-usuario.html',
  styleUrl: './bienvenida-usuario.css'
})
export class BienvenidaUsuario {
  constructor(private router: Router, private auth: AuthService) {}

  async salir() {
    await this.auth.logout();
    this.router.navigate(['/login']);
  }
}