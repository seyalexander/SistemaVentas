import { Observable } from "rxjs";
import { familiaProductosModel } from "../familiaProductos.model";

export abstract class familiaProductosGateway {
  abstract getAllFamiliaProductos(): Observable<Array<familiaProductosModel>>;
  abstract newFamiliaProductos(familiaProductos: familiaProductosModel): Observable<object>;
}
