import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { AuthService } from './../../../services/auth'; 

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ingresar() {
    this.authService.login(this.email, this.password)
      .then((cred) => {
        const uid = cred.user?.uid || '';
        
        // Aquí pedimos los datos a Firestore y los mostramos
        this.authService.ObtenerUsuario(uid).subscribe((usuario: any) => {
          
          // ESTO ES LO QUE EXTRAÑABAS: Ver los datos en consola
          console.log('--- USUARIO IDENTIFICADO ---');
          console.log('ID:', uid);
          console.log('Datos completos:', usuario);
          
          if (usuario && usuario.rol === "admin") {
            console.log('Accediendo como ADMINISTRADOR');
            this.router.navigate(['/admin']);
          } else {
            console.log('Accediendo como USUARIO ESTÁNDAR');
            this.router.navigate(['/usuario']);
          }
        });
      })
      .catch((error) => {
        console.error('Error en login: ', error);
        alert('Error al ingresar: Revisa tus credenciales.');
      });
  }

  registrar() {
    this.authService.registrar(this.email, this.password)
      .then((res) => {
        // También ponemos consola aquí para el registro
        console.log('Nuevo usuario registrado:', res.user?.email);
        alert('Usuario registrado con éxito');
      })
      .catch(err => {
        console.error('Error al registrar:', err);
      });
  }

  irRegistrar() {
    this.router.navigate(["/registrar"]); 
  }
}