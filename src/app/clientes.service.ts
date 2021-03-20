import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Cliente } from './content/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor( 
    private http: HttpClient
  ) { }

  salvarCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>('http://localhost:8080/api/cliente/save', cliente);
  }

  listarClientes(): Observable<any>{
    return this.http.get<any>('http://localhost:8080/api/cliente/list');
  }

}
