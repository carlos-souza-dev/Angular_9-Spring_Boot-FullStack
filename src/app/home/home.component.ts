import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private clienteService: ClientesService
  ) { }

  ngOnInit(): void {
    this.clienteService.setRotas('/home')
  }

}
