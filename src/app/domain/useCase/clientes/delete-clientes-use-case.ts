import { Observable } from "rxjs";
import { clientesModel } from "../../models/clientes/clientes.model";
import { clientesGateway } from "../../models/clientes/gateway/clientes-gateway";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class GetClientesUseCase {

  constructor(private _clientesGateway: clientesGateway) {}

}
