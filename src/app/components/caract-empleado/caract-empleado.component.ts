import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServiceEmpService } from '../../services/service-emp.service';

@Component({
  selector: 'app-caract-empleado',
  templateUrl: './caract-empleado.component.html',
  styleUrls: ['./caract-empleado.component.css']
})
export class CaractEmpleadoComponent implements OnInit {

 @Output() caracteriticasEmpleados = new EventEmitter<string>();

//  5 agregar el servicio en otro componente
  constructor(private miServicio:ServiceEmpService) {

  }

  ngOnInit(): void {
  }

   agregarCaracteristicas(value:string){
    // 6 usando el servicio
    this.miServicio.muestraMensaje(value)
    this.caracteriticasEmpleados.emit(value);
   }
}
