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

// declarando las rutas
const appRoutes:Routes = [
  { path: "",component: HomeComponent},
  { path: "proyectos",component: ProyectosComponent},
  { path: "quienes",component: QuienesComponent},
  { path: "contacto",component: ContactoComponent},
  { path: "modificar/:id",component: ModificarComponent}

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
    ModificarComponent
  ],
  // importar el router module
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // llamamos la varibe de routes
    RouterModule.forRoot(appRoutes)
  ],
  // 2 registrar servicios
  providers: [ ServiceEmpService,EmpDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
