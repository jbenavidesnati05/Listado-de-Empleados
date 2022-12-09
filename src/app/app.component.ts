import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Empleados';
  empleados:Empleado[] =
  [
    new Empleado("juan", "dias", "dir", 7500),
    new Empleado("ana", "fernandez", "presidente", 4500),
    new Empleado("maria", "lopez", "admin", 11500)
  ];

  cuadroNombre:string= " ";
  cuadroApellido:string= " ";
  cuadroCargo:string= " ";
  cuadroSalario:number= 0;

  agregarEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario)
    this.empleados.push(miEmpleado)
    this.cuadroNombre = " ";
    this.cuadroApellido = " ";
    this.cuadroCargo = " ";
    this.cuadroSalario = 0;
  }
  miEmpleado(miEmpleado: any) {
    throw new Error('Method not implemented.');
  }

}
