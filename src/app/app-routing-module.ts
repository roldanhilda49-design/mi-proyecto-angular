import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Registrar } from './modules/auth/registrar/registrar';
import { Login } from './modules/auth/login/login';
import { BienvenidaAdmin } from './modules/dashboard/bienvenida-admin/bienvenida-admin';
import { BienvenidaUsuario } from './modules/dashboard/bienvenida-usuario/bienvenida-usuario';
import { CambiarRol } from './modules/dashboard/bienvenida-admin/cambiar-rol/cambiar-rol';
import { DesactivarUsuario } from './modules/dashboard/bienvenida-admin/desactivar-usuario/desactivar-usuario';

const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'registrar', component: Registrar },
  { path: 'usuario', component: BienvenidaUsuario },
  { 
    path: 'admin', 
    component: BienvenidaAdmin,
    children: [
      { path: 'cambiar-rol', component: CambiarRol },
      { path: 'desactivar-usuario', component: DesactivarUsuario }
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' } // Por si escriben algo mal
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }