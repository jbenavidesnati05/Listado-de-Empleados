import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/empleado.model';
import { EmpDataService } from 'src/app/services/emp-data.service';
import { ServiceEmpService } from 'src/app/services/service-emp.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
  }

  titulo = 'Listado de Empleados';


    // 3 constructor de servicio
    constructor( private miServicio:ServiceEmpService, private empleadosdata:EmpDataService){

      this.empleados = this.empleadosdata.empleados;
    }
    empleados:Empleado[]=[]


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
    cuadroNombre:string= " ";
    cuadroApellido:string= " ";
    cuadroCargo:string= " ";
    cuadroSalario:number= 0;

}
