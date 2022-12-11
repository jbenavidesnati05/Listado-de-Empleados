import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../../empleado.model';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  @Input()
  empleadoDeLista!: Empleado;
  @Input()
  indice!: number;

  constructor() { }
  ngOnInit(): void {
  }

  arrayCaracteristica= [""];

  agregarCaracteristica(nuevaCaracteristica:string){
    this.arrayCaracteristica.push(nuevaCaracteristica)

  }

}
