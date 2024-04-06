import { Observable } from "rxjs";
import { unidadMedidaModel } from "../unidadMedida.model";

export abstract class unidadMedidaGateway {
  abstract getAllUnidadMedida(): Observable<Array<unidadMedidaModel>>;
  abstract newUnidadMedida(unidadMedida: unidadMedidaModel): Observable<object>
}
