import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmailComponent} from "./email/email.component";
import {UsuarioComponent} from "./usuario/usuario.component";
import {ListarComponent} from "./usuario/listar/listar.component";

const routes: Routes = [
  {path:"email/send", component: EmailComponent},
  {path:"usuario/crear", component: UsuarioComponent},
  {path:"usuario/listar", component: ListarComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
