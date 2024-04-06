import { Observable } from "rxjs";
import { tipoProductoModel } from "../tipoProducto.model";

export abstract class tipoProductoGateway {
  abstract getAllTipoProductos(): Observable<Array<tipoProductoModel>>;
  abstract newTipoProducto(tipoProducto: tipoProductoModel): Observable<object>
}
