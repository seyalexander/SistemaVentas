import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { PaisesGateway } from "../../models/paises/gateway/paises-gateway";
import { paisesModel } from "../../models/paises/paises.model";

@Injectable({
  providedIn: 'root'
})

export class GetPaisesUseCase {

  constructor(private _paisesGateway: PaisesGateway) {}

  getAllPaises(): Observable<Array<paisesModel>> {
    return this._paisesGateway.getAllPaises()
  }

}
