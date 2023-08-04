import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Email} from "../app/domain/Email";

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {

  constructor(private httpClient: HttpClient) { }
  save(email: Email): Observable<any[]> {
    //Para poner usamos el .post y para obtener el .get
    return this.httpClient.post<any>("http://localhost:8003/email/send", email);
  }
}
