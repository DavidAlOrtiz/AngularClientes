import { Component } from '@angular/core';
import { Cliente } from './cliente';
import {ClientesService} from './clientes.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
//Clase que maneja el form
export class FormComponent {
  
  titulo: string = "Crear";
  cliente: Cliente  = new Cliente();
  
  constructor(private clienteServices: ClientesService, 
    private route:Router){}

  ngOnInit() {

  }

  public create(): void {

    this.clienteServices.create(this.cliente).subscribe(
      response => {
        this.route.navigate(['/clientes'])
        swal('Nuevo', `Cliente ${response.nombre} guardado con exito`, 'success');
      }
    );
  }
}
