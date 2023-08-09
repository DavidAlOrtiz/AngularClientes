import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponet } from './footer/footer.component';
import { AlgoComponent } from './algo/algo.component';
import { ClientesComponent } from './clientes/clientes.component';

import {HttpClientModule} from '@angular/common/http';

//Clases de servicio 
import {ClientesService} from './clientes/clientes.service';

//Rutas
import {RouterModule, Routes} from "@angular/router";

const routes : Routes = [
   {path: '', redirectTo:"", pathMatch:'full'},
   {path: 'directivas', component: AlgoComponent},
   {path: 'clientes', component: ClientesComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponet,
    AlgoComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ClientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
