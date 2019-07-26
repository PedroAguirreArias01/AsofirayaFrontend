import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlEndPoint: string = 'http://192.168.43.236:7324/usuario';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(private http: HttpClient, private router: Router) { }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Usuario[])
    );
  }

  getManilla() {
    return this.http.get('http://192.168.43.236:7324/obtenerManilla1',{responseType: 'text'});
  }

  create(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.urlEndPoint, usuario, { headers: this.httpHeaders }).pipe(
      map((response: any) => response.usuario as Usuario),
    );
  }

  delete(cedula: string): Observable<Usuario> {
    return this.http.delete<Usuario>(`${this.urlEndPoint}${cedula}`, { headers: this.httpHeaders }).pipe(
    );
  }

  getUsuario(cedula: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.urlEndPoint}${cedula}`).pipe(
    );
  }

  update(empleado: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.urlEndPoint}${empleado.cedula}`, empleado).pipe(
      map((response: any) => response.empleado as Usuario),
    );
  }
}
