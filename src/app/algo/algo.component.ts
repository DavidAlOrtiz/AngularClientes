import { Component } from '@angular/core';

@Component({
  selector: 'app-algo',
  templateUrl: './algo.component.html',
})
export class AlgoComponent {

  cursos : string[] = ["Java", "Angular", "AWS", "Jakarta ee"];
  habilitar: boolean = false;

  setHabilitar() : void  {
    this.habilitar = !this.habilitar;
  }

}
