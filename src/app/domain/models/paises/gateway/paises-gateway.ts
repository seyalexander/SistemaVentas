import { Observable } from "rxjs";
import { paisesModel } from "../paises.model";

export abstract class PaisesGateway {
  abstract getAllPaises(): Observable<Array<paisesModel>>;
  // abstract newPaises(paises: paisesModel): Observer<Object>;
}
