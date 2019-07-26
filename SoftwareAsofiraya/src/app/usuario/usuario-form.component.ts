import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  public usuario: Usuario = new Usuario;
  public editar: boolean;
  public manilla: string;

  constructor(public usuarioService: UsuarioService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if (!this.editar) {
      this.cargarEmpleado();
    }
  }

public cargarManilla(){
  Swal.fire({
    title: 'Agregar identificador!',
    text: `Acerque el llavero RFID al lector`,
    type: 'success',
    confirmButtonText: 'Aceptar'
  })
  
  this.usuarioService.getManilla().subscribe(
    (result) => {
      this.manilla  = result;
      this.usuario.manilla = this.manilla;
    }
  );
}


  public crear(): void {
    this.usuarioService.create(this.usuario).
      subscribe(usuario => {
        this.router.navigate(['/usuarios'])
        Swal.fire({
          title: 'Nuevo Usuario!',
          text: `Usuario ${this.usuario.nombre} creado con exito`,
          type: 'success',
          confirmButtonText: 'Aceptar'
        })
      }
      )
  }

  cargarEmpleado(): void {
    this.editar = false;
    this.activatedRoute.params.subscribe(params => {
      let cedula = params['cedula'];
      console.log('esta es la cedula del empleado a editar: ' + cedula)
      if (cedula) {
        console.log('if esta es la cedula del empleado a editar: ' + cedula)
        this.editar = true;
        this.usuarioService.getUsuario(cedula).subscribe(
          (usuario) => {
            this.usuario = usuario
          }
        )
      }
    })
  }

  update(): void {
    this.usuarioService.update(this.usuario).subscribe(usuario => {
      this.router.navigate(['/usuarios'])
      Swal.fire({
        title: 'Actualizar Usuario!',
        text: `Usuario ${usuario.nombre} actualizado con exito`,
        type: 'success',
        confirmButtonText: 'Aceptar'
      })
    })
  }

}
