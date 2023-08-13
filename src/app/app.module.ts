import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponet } from './footer/footer.component';
import { AlgoComponent } from './algo/algo.component';
import { ClientesComponent } from './clientes/clientes.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

//Clases de servicio 
import {ClientesService} from './clientes/clientes.service';

//Rutas
import {RouterModule, Routes} from "@angular/router";
import { FormComponent } from './clientes/form.component';

const routes : Routes = [
   {path: '', redirectTo:"", pathMatch:'full'},
   {path: 'directivas', component: AlgoComponent},
   {path: 'clientes', component: ClientesComponent},
   {path: 'clientes/form', component: FormComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponet,
    AlgoComponent,
    ClientesComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [ClientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
