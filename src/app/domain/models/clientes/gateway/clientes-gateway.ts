import { Observable } from "rxjs";
import { clientesModel } from "../clientes.model";

export abstract class clientesGateway {
  abstract getAllClientes():Observable<Array<clientesModel>>;
  // abstract newClientes(cliente: clientesModel):Observable<Object>;
}
