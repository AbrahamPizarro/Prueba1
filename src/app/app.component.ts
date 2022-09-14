import { Component } from '@angular/core';
import { Alumno } from './modelo/alumno';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public alumnos: Array<Alumno> = [
    {
      rut: 1234456789-0,
      nombre: 'abraham',
      apellido: 'pizarro',
      edad: 20,
      seccion: '004D'
    },

  ];

  public guardarNuevo(alumno: Alumno): void{
    const id = this.alumnos.length;
    alumno.rut = id;
    this.alumnos.push(alumno);
  }
}
