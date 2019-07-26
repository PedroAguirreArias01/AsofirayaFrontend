import { Component, OnInit } from '@angular/core';
import { ActividadService } from './actividad.service';
import { Actividad } from './actividad';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.css']
})
export class ActividadComponent implements OnInit {

  
  public pageActual: number = 1;
  public actividades: Actividad[];

  constructor(public actividadService: ActividadService) { }

  ngOnInit() {
    this.actividadService.get().subscribe(
      actividades => this.actividades = actividades
    );
  }

  registrarAsistencia(actividad: Actividad){
    this.actividadService.registrarActividad(actividad).subscribe(
      rest => {
        Swal.fire({
          title: 'Registro de asistencia!',
          text: ` ${rest} `,
          type: 'success',
          confirmButtonText: 'Aceptar'
        })
      }
    )
  }
}
