import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailComponent } from './email/email.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import { UsuarioComponent } from './usuario/usuario.component';
import { ListarComponent } from './usuario/listar/listar.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailComponent,
    UsuarioComponent,
    ListarComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule, // Agrega BrowserAnimationsModule
      ToastrModule.forRoot({
        positionClass: 'toast-top-right', // Asegúrate de que sea 'toast-top-right'
        preventDuplicates: true,
        closeButton: true,
        progressBar: true
      })
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
