import { Observable } from "rxjs";
import { clasificacionModel } from "../clasificaciones.model";

export abstract class clasificacionGateway {
  abstract getAllClasificacion(): Observable<Array<clasificacionModel>>;
  //abstract newClasificacion(clasificacion: clasificacionModel): Observable<object>;
}
