import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-caract-empleado',
  templateUrl: './caract-empleado.component.html',
  styleUrls: ['./caract-empleado.component.css']
})
export class CaractEmpleadoComponent implements OnInit {

 @Output() caracteriticasEmpleados = new EventEmitter<string>();

  constructor() { }
  ngOnInit(): void {
  }

   agregarCaracteristicas(value:string){
    this.caracteriticasEmpleados.emit(value);
   }
}
