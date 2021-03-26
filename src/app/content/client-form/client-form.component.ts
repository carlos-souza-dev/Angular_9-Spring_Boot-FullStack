import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'
import { ClientesService } from 'src/app/clientes.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  cliente: Cliente; 
  sucesso: boolean = false;
  erros: string;
  id: number;
  rota: string;

  constructor( 
    private clientesService: ClientesService,
    private router: ActivatedRoute
  ) { 
    this.cliente = new Cliente

    this.router.params.subscribe(res => {
      this.id = res.id;
    })

    if(this.id){
      this.clientesService.buscarCliente(this.id).subscribe(res => {
        this.cliente = res;
      })
    }

    this.rota = this.clientesService.getRotas();
    console.log("Rota", this.rota)
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.clientesService.salvarCliente(this.cliente).subscribe(res => {
      this.sucesso = true;
      this.erros = null;
      this.cliente = res;
    }, HttpErrorResponse => {
      this.sucesso = false;
      this.erros = HttpErrorResponse.error.error;
    });
  }

}
