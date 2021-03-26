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
  status: string = null;
  erros: String[] = [];
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
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.id) {
      console.log("TEste", this.id)
       this.clientesService.atualizarCliente(this.id, this.cliente).subscribe(res => {
        this.status = 'Atualizado';
        this.erros = null;
      }, HttpErrorResponse => {
        this.status = null;
        this.erros = HttpErrorResponse.error.errors;
      }); 

    } else {

      this.clientesService.salvarCliente(this.cliente).subscribe(res => {
        this.status = 'Cadastrado';
        this.erros = null;
        this.cliente = res;
      }, HttpErrorResponse => {
        this.status = null;
        this.erros = HttpErrorResponse.error.errors;
      });
    
    }
  }

}
