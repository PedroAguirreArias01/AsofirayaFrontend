import { Actividad } from '../actividad/actividad';
import { Usuario } from '../usuario/usuario';

export class Asistencia1{
    public id: number;
    public actividad: Actividad;
    public cedulaAdulto: Usuario;
    public horaInicio: Date;
}