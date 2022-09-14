import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AlumnoComponent} from './componentes/alumno/alumno.component'
import { FormularioAlumnoComponent } from './componentes/formulario-alumno/formulario-alumno.component';
import { FormularioSeeciionComponent } from './componentes/formulario-seeciion/formulario-seeciion.component';
import { ListaHistorialComponent } from './componentes/lista-historial/lista-historial.component';
import { ListaAlumnoComponent } from './componentes/lista-alumno/lista-alumno.component';



@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    FormularioAlumnoComponent,
    FormularioSeeciionComponent,
    ListaHistorialComponent,
    ListaAlumnoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
