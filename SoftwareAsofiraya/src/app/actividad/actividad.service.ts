import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import { Actividad } from './actividad';
import { Asistencia1 } from '../asistencia/asistencia';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {
  
  private urlEndPoint: string = 'http://192.168.43.236:7324/actividad';
  private urlAsistencia: string = 'http://192.168.43.236:7324/asistencia/'
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })
  public asistencia: Asistencia1 = new Asistencia1();
  constructor(private http: HttpClient, private router: Router) { }

  get(): Observable<Actividad[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Actividad[])
    );
  }

  create(actividad: Actividad): Observable<Actividad> {
    return this.http.post<Actividad>(this.urlEndPoint, actividad, { headers: this.httpHeaders }).pipe(
      map((response: any) => response.actividad as Actividad),
    );
  }

  delete(id: number): Observable<Actividad> {
    return this.http.delete<Actividad>(`${this.urlEndPoint}${id}`, { headers: this.httpHeaders }).pipe(
    );
  }

  getActividad(id: number): Observable<Actividad> {
    return this.http.get<Actividad>(`${this.urlEndPoint}${id}`).pipe(
    );
  }

  update(actividad: Actividad): Observable<Actividad> {
    return this.http.put<Actividad>(`${this.urlEndPoint}${actividad.id}`, actividad).pipe(
      map((response: any) => response.actividad as Actividad),
    );
  }

  registrarActividad(actividad: Actividad){
    return this.http.post(this.urlAsistencia+''+actividad.id, this.asistencia, { headers: this.httpHeaders });
  }
}
