import { Component } from '@angular/core';
import { Cliente } from './cliente';
import {ClientesService} from './clientes.service';
import { Router, ActivatedRoute } from '@angular/router';
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
    private route:Router, private activateRoute : ActivatedRoute){}

  ngOnInit() {
    this.cargarCliente()
  }


  cargarCliente(): void {
    this.activateRoute.params.subscribe(params => {
      let id = params['id'];
      if(id){
        this.clienteServices.getCliente(id).subscribe((cliente)=>this.cliente = cliente)
      }
    })
  }


  public create(): void {

    this.clienteServices.create(this.cliente).subscribe(
      response => {
        this.route.navigate(['/clientes'])
        swal('Nuevo', `Cliente ${response.nombre} guardado con exito`, 'success');
      }
    );
  }

  public update():void{
    this.clienteServices.updateCliente(this.cliente).subscribe(cliente => {
      this.route.navigate(['/clientes'])
      swal('Cliente Actualizado', `Cliente ${cliente.nombre} Actualizado correctamente`, 'success')
    })
  }




}
