import { Component } from '@angular/core';
import { Cliente } from './cliente';
import {ClientesService} from './clientes.service';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
})
export class ClientesComponent {

  clientes: Cliente[];

  constructor(private clienteService : ClientesService ) {
    this.clientes = [];
  }

  ngOnInit() {
     this.clienteService.getClientes().subscribe(
      (clientes) => {
        this.clientes = clientes
      }
    );
  }

}
