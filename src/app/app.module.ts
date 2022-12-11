import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { CaractEmpleadoComponent } from './components/caract-empleado/caract-empleado.component';
import { ServiceEmpService } from './services/service-emp.service';
import { EmpDataService } from './services/emp-data.service';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    CaractEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  // 2 registrar servicios
  providers: [ ServiceEmpService,EmpDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
