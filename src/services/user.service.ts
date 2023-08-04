import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Email} from "../app/domain/Email";
import {Observable} from "rxjs";
import {Usuario} from "../app/domain/Usuario";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  save(usuario: Usuario): Observable<any[]> {
    //Para poner usamos el .post y para obtener el .get
    return this.httpClient.post<any>("http://localhost:8003/usuario/crear", usuario);
  }
  listClientes (): Observable<any[]> {
    return this.httpClient.get<Usuario[]>("http://localhost:8003/usuario/todos");
  }
}
