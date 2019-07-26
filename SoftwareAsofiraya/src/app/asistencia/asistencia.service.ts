import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Asistencia1 } from './asistencia';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {
  private urlEndPoint: string = 'http://192.168.43.236:7324/asistencia';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(private http: HttpClient, private router: Router) { }

  getUsuarios(): Observable<Asistencia1[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Asistencia1[])
    );
  }

}
