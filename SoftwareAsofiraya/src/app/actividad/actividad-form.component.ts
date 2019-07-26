import { Component, OnInit } from '@angular/core';
import { Actividad } from './actividad';
import { ActividadService } from './actividad.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actividad-form',
  templateUrl: './actividad-form.component.html'
})
export class ActividadFormComponent implements OnInit {

  public actividad: Actividad = new Actividad;
  public editar: boolean;

  constructor(public actividadService: ActividadService,  private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if (!this.editar) {
      this.cargar();
    }
  }

  public crear(): void {
    this.actividadService.create(this.actividad).
      subscribe(actividad => {
        this.router.navigate(['/actividades'])
        Swal.fire({
          title: 'Nuevo Usuario!',
          text: `Actividad ${actividad.descripcion} creada con exito`,
          type: 'success',
          confirmButtonText: 'Aceptar'
        })
      }
      )
  }

  cargar(): void {
    this.editar = false;
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        console.log('if esta es la cedula del empleado a editar: ' + id)
        this.editar = true;
        this.actividadService.getActividad(id).subscribe(
          (actividad) => {
            this.actividad = actividad
          }
        )
      }
    })
  }

  update(): void {
    this.actividadService.update(this.actividad).subscribe(actividad => {
      this.router.navigate(['/Actividades'])
      Swal.fire({
        title: 'Actualizar Actividad!',
        text: `Actividad ${actividad.descripcion} actualizada con exito`,
        type: 'success',
        confirmButtonText: 'Aceptar'
      })
    })
  }

}
