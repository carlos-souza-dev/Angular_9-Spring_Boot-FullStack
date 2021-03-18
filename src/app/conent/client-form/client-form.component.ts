import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { FormsModule } from '@angular/forms';
import { ClientesService } from 'src/app/clientes.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  cliente: Cliente 

  constructor( 
    private clientesService: ClientesService
  ) { 
    this.cliente = new Cliente
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.clientesService.salvarCliente(this.cliente).subscribe(res => {
      console.log("Resposta", res)
    });
  }

}
