import { Observable } from "rxjs";
import { divisasModel } from "../divisas.model";

export abstract class divisasGateway {
  abstract getAllDivisas(): Observable<Array<divisasModel>>;
  abstract newDivisas(divisas: divisasModel): Observable<object>
}
