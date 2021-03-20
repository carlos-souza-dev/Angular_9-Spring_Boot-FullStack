import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clientes: any;

  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.listarClientes();
  }

  listarClientes(){
    this.clientesService.listarClientes().subscribe(res => {
      this.clientes = res;
    })
  }

}
