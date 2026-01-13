import { AuthService } from './../../../services/auth'; // Asegúrate de que diga AuthService
import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
  email: string = '';
  password: string = '';

  // Cambiamos Auth por AuthService aquí también
  constructor(private authService: AuthService, private router: Router) {}

  // Renombramos login por ingresar
  ingresar() {
    this.authService
      .login(this.email, this.password)
      .then((cred) => {
        const uid = cred.user?.uid || '';
        this.authService.ObtenerUsuario(uid).subscribe((usuario: any) => {
          console.log('Usuario', usuario);
          if (usuario.rol === "admin") {
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['/usuario']);
          }
        });
      })
      .catch((error) => {
        console.error('Error en login: ', error);
      });
  }

  // Esta es la función que te faltaba para el otro botón del HTML
  registrar() {
    this.authService.registrar(this.email, this.password)
      .then(() => {
        console.log('Usuario registrado con éxito');
      })
      .catch(err => console.error(err));
  }

  irRegistrar() {
    this.router.navigate(["/registrar"]); 
  }
}