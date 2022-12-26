import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { CaractEmpleadoComponent } from './components/caract-empleado/caract-empleado.component';
import { ServiceEmpService } from './services/service-emp.service';
import { EmpDataService } from './services/emp-data.service';
// creados para routing
import { HomeComponent } from './components/home/home.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { QuienesComponent } from './components/quienes/quienes.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { Routes, RouterModule } from '@angular/router';
import { ModificarComponent } from './components/modificar/modificar.component';
import { DataService } from './services/data.service';
// importando modulo Http
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';

// declarando las rutas
const appRoutes:Routes = [
  { path: "",component: HomeComponent},
  { path: "proyectos",component: ProyectosComponent},
  { path: "quienes",component: QuienesComponent},
  { path: "contacto",component: ContactoComponent},
  { path: "modificar/:id",component: ModificarComponent},
  { path: "login",component: LoginComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    CaractEmpleadoComponent,
    // componetes de routes creadas
    HomeComponent,
    ProyectosComponent,
    QuienesComponent,
    ContactoComponent,
    ModificarComponent,
    LoginComponent
  ],
  // importar el router module
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // llamamos la varibe de routes
    RouterModule.forRoot(appRoutes),
    // para conexion firebase
    HttpClientModule

  ],
  // 2 registrar servicios
  providers: [ ServiceEmpService,EmpDataService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
