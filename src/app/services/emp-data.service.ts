import { Injectable } from '@angular/core';
import { Empleado } from '../empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpDataService {

  constructor() { }

  empleados:Empleado[] =
  [
    new Empleado("juan", "dias", "dir", 7500),
    new Empleado("ana", "fernandez", "presidente", 4500),
    new Empleado("maria", "lopez", "admin", 11500),
    new Empleado("erik", "fernan", "ger", 12500)
  ];


  agregarEmpleadoServicio(empleado:Empleado){
    this.empleados.push(empleado);
  }
}
