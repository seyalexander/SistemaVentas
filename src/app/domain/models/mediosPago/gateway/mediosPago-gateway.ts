import { Observable } from "rxjs";
import { mediosPagoModel } from "../mediosPago.model";

export abstract class mediosPagoGateway {
  abstract getAllMediosPago(): Observable<Array<mediosPagoModel>>;
  abstract newMediosPago(mediosPago: mediosPagoModel): Observable<object>
}
