import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clientes: Cliente[] = [];
  item: number;

  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.listarClientes();
  }

  listarClientes(){
    this.clientesService.listarClientes().subscribe(res => {
      this.clientes = res;
    })
  }

  atualizarCliente(id: number){

  }

  deletar(id: number){
    this.item = id;
  }

  deletarCliente(id: String){
      console.log("Numbero",id);
  }

  setRoute(rota: string){
    this.clientesService.setRotas(rota);
  }

}
