import { Observable } from "rxjs";
import { tipoTarifaModel } from "../tipoTarifas.model";

export abstract class tipoTarifaGateway {
  abstract getAllTipoTarifa(): Observable<Array<tipoTarifaModel>>;
  abstract newTipoTarifa(tipoTarifa: tipoTarifaModel): Observable<object>;
}
