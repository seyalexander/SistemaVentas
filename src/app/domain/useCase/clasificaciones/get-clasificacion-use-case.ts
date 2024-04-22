import { Observable } from "rxjs";
import { clientesGateway } from "../../models/clientes/gateway/clientes-gateway";
import { Injectable } from "@angular/core";
import { clasificacionModel } from "../../models/clasificaciones/clasificaciones.model";
import { clasificacionGateway } from "../../models/clasificaciones/gateway/clasificaciones-gateway";

@Injectable({
  providedIn: 'root'
})

export class GetClientesUseCase {

  constructor(private _clasificacionesGateway: clasificacionGateway) {}

  getAllClientes(): Observable<Array<clasificacionModel>> {
    return this._clasificacionesGateway.getAllClasificacion();
  }

}
