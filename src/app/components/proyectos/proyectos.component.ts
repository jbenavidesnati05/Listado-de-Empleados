import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Empleado } from 'src/app/empleado.model';
import { EmpDataService } from 'src/app/services/emp-data.service';
import { ServiceEmpService } from 'src/app/services/service-emp.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  ngOnInit(): void {
  }




  // importando router (CREAMOS VARIABLE router)
  constructor( private router:Router, private miServicio:ServiceEmpService, private empleadosdata:EmpDataService) { }

  volverHome(){
    this.router.navigate([""])
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
    this.volverHome()
  }

}
