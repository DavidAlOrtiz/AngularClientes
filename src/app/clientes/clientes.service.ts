import { Injectable } from '@angular/core';
import { CLIENTES } from './clientes.json';
import { Cliente } from './cliente';
import {Observable, of, throwError} from   'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

//Clase de servicio de clase
export class ClientesService {
  
  private url:string = 'http://localhost:8090/clientes/';
  private httpHeaders = new HttpHeaders({ 'Content-type': 'application/json'});

  constructor(private http :  HttpClient, private router: Router) { }

  getClientes() : Observable<Cliente[]> { 
    
    //return of(CLIENTES)
    return this.http.get<Cliente[]>(this.url);
  }

  create(cliente : Cliente) : Observable<Cliente>{
    return this.http.post<Cliente>(this.url, cliente, {headers : this?.httpHeaders}).pipe(
      catchError(e => {
        console.log(e);
        swal("Error al crear usuario", e.mensaje.error, "error");
        return throwError(e);
      })
    );
  }

   getCliente(id :Number): Observable<Cliente>{
     return this.http.get<Cliente>(`${this.url}${id}`).pipe(
        catchError(e =>{
          this.router.navigate(['/clientes']);
          swal("error al editar", e.error.mensaje, 'error');
          console.log(e.error.mensaje);
          return throwError(e);
        })
     );
   }

   updateCliente(cliente:Cliente): Observable<Cliente>{
     return this.http.put<Cliente>(`${this.url}${cliente.id}`, cliente, {headers: this?.httpHeaders}).pipe(
      catchError(e=>{
        console.log(e);
        swal("error al editar", e.error.mensaje, "error");
        return throwError(e);
      })
     );
   }

   delete(id:number): Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.url}${id}`).pipe(
      catchError(e =>{
        console.log(e);
        swal("error al eliminar", e.error.mensaje, "error");
        return throwError(e);
      })
    );
   } 

}
