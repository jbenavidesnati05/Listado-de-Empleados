import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/empleado.model';
import { EmpDataService } from 'src/app/services/emp-data.service';
import { ServiceEmpService } from 'src/app/services/service-emp.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {
  // activar private route:ActivatedRoute para el modificar
  constructor(private router:Router, private miServicio:ServiceEmpService, private empleadosdata:EmpDataService,private route:ActivatedRoute) { }
  empleados:Empleado[]=[]

  ngOnInit(): void {
    this.empleados = this.empleadosdata.empleados;
    this.indice = this.route.snapshot.params["id"];
    let empleado:Empleado = this.empleadosdata.encontrarEmpleado(this.indice);
    this.cuadroNombre = empleado.nombre;
    this.cuadroApellido = empleado.apellido;
    this.cuadroCargo = empleado.cargo;
    this.cuadroSalario = empleado.salario;

  }

  volverHome(){
    this.router.navigate([""])
  }


  cuadroNombre:string= " ";
  cuadroApellido:string= " ";
  cuadroCargo:string= " ";
  cuadroSalario:number= 0;
  // para modificar
  indice:number = 0;

  actualizarEmpleado(){

    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario)
    // 4 uso de servicio
    this.miServicio.muestraMensaje("nombre del empleado"+miEmpleado.nombre+miEmpleado.apellido);
    this.empleadosdata.actualizarEmpleado(this.indice,miEmpleado)
    this.cuadroNombre = " ";
    this.cuadroApellido = " ";
    this.cuadroCargo = " ";
    this.cuadroSalario = 0;
    this.volverHome()
  }

  eliminarEmpleado(){

    this.empleadosdata.eliminarEmpleado(this.indice)
    this.volverHome()

  }


}
