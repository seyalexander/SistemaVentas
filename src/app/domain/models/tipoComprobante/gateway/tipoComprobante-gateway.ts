import { Observable } from "rxjs";
import { tipoComprobanteModel } from "../tipoComprobante.model";

export abstract class tipoComprobanteGateway {
  abstract getAllTipoComprobante(): Observable<Array<tipoComprobanteModel>>;
  abstract newTipoComprobante(tipoComprobante: tipoComprobanteModel): Observable<object>
}
