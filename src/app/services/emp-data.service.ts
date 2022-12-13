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

  encontrarEmpleado(indice:number){

    let empleado:Empleado = this.empleados[indice];
    return empleado

  }

  actualizarEmpleado(indice:number, empleado:Empleado){
    let empleadoModificado = this.empleados[indice];

    empleadoModificado.nombre   = empleado.nombre;
    empleadoModificado.apellido = empleado.apellido;
    empleadoModificado.cargo    = empleado.cargo;
    empleadoModificado.salario  = empleado.salario;
  }

  eliminarEmpleado(indice:number){
    this.empleados.splice(indice,1);
  }
}
