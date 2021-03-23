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

  listarClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>('http://localhost:8080/api/cliente/list');
  }

}
