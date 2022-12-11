import { Component } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServiceEmpService } from './services/service-emp.service';
import { EmpDataService } from './services/emp-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Empleados';

  // 3 constructor de servicio
  constructor( private miServicio:ServiceEmpService, private empleadosdata:EmpDataService){

    this.empleados = this.empleadosdata.empleados;
  }
      empleados:Empleado[]=[]

  cuadroNombre:string= " ";
  cuadroApellido:string= " ";
  cuadroCargo:string= " ";
  cuadroSalario:number= 0;

  agregarEmpleado(){

    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario)
    // 4 uso de servicio
    this.miServicio.muestraMensaje("nombre del empleado"+miEmpleado.nombre+miEmpleado.apellido);
    this.empleadosdata.agregarEmpleadoServicio(miEmpleado)
    this.cuadroNombre = " ";
    this.cuadroApellido = " ";
    this.cuadroCargo = " ";
    this.cuadroSalario = 0;
  }
}
