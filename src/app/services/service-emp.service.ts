import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceEmpService {
  constructor() { }

  muestraMensaje(mensaje:string){
    alert(mensaje);
  }
}
