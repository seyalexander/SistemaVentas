import { Observer } from "rxjs";
import { paisesModel } from "../paises.model";

export abstract class PaisesGateway {
  abstract getAllPaises(): Observer<Array<paisesModel>>;
  abstract newPaises(paises: paisesModel): Observer<Object>;
}
