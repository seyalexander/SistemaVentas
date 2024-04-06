import { Observable } from "rxjs";
import { tipoDocumentoModel } from "../tipoDocumento.model";

export abstract class tipoDocumentoGateway {
  abstract getAllTipoDocumentos(): Observable<Array<tipoDocumentoModel>>;
  abstract newTipoDocumento(tipoDocumento: tipoDocumentoModel): Observable<Object>;
}
