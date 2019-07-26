import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { Router } from '@angular/router';
import { Usuario } from './usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public pageActual: number = 1;
  public usuarios: Usuario[];

  constructor( public usuarioService:UsuarioService, public router: Router) { }

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe(
      usuarios => this.usuarios = usuarios
    );
  }

}
