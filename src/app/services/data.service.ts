import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from '../empleado.model';

@Injectable({
  providedIn: 'root'
})


export class DataService {
  // programar servicio de conexion en firebase
  constructor( private httpClient: HttpClient ) { }

  guardarEmpleados(empleados: Empleado[]){
    this.httpClient.post('https://mis-clientes-f32b7-default-rtdb.firebaseio.com/datos.json',empleados).subscribe(
      response =>console.log("se han guardado lo empleados: "+ response ),
      error => console.log("error"+ error)
    );
    
  }



}
