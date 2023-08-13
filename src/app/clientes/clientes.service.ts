import { Injectable } from '@angular/core';
import { CLIENTES } from './clientes.json';
import { Cliente } from './cliente';
import {Observable, of} from   'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  
  private url:string = 'http://localhost:8080/clientes/';
  private httpHeaders = new HttpHeaders({ 'Content-type': 'application/json'});

  constructor(private http :  HttpClient) { }

  getClientes() : Observable<Cliente[]> { 
    
    //return of(CLIENTES)
    return this.http.get<Cliente[]>(this.url);
  }

  create(cliente : Cliente) : Observable<Cliente>{
    return this.http.post<Cliente>(this.url, cliente, {headers : this?.httpHeaders});
  }

}
