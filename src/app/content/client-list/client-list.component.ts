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
  dadosDeletar: Cliente;

  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.listarClientes();
    console.log("Tamanho", this.clientes.length)
  }

  setRoute(rota: string){
    this.clientesService.setRotas(rota);
  }

  listarClientes(){
    this.clientesService.listarClientes().subscribe(res => {
      this.clientes = res;
    })
  }

  deletar(cliente: Cliente){
    this.dadosDeletar = cliente;
  }

  deletarCliente(id: number){
    this.clientesService.deletarCliente(id).subscribe( res => { 
      this.ngOnInit();
    }, erros => {
      console.log("erro", erros)
    })
  }

}
