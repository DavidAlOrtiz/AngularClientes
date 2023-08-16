import { Component } from '@angular/core';
import { Cliente } from './cliente';
import { ClientesService } from './clientes.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
})
export class ClientesComponent {

  clientes: Cliente[];

  constructor(private clienteService: ClientesService) {
    this.clientes = [];
  }

  ngOnInit() {
    this.clienteService.getClientes().subscribe(
      (clientes) => {
        this.clientes = clientes
      }
    );
  }

  delete(cliente: Cliente): void {
    
    let resultado = confirm("Deseas eliminar este registro");

    if(resultado){
        this.clienteService.delete(cliente.id).subscribe(
          response => {
            this.clientes = this.clientes.filter( cl => cl !== cliente);
            alert(`${cliente.nombre} eliminado!!!`)
          }
        )
    }



  }

}
