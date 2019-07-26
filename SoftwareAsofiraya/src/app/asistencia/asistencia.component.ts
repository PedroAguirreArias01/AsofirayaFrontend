import { Component, OnInit } from '@angular/core';
import { Actividad } from '../actividad/actividad';
import { Asistencia1 } from './asistencia';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
})
export class AsistenciaComponent implements OnInit {
  
  public pageActual: number = 1;
  public asistencias: Asistencia1[];

  constructor() { }

  ngOnInit() {
  }

}
