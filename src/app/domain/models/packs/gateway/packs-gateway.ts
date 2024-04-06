import { Observable } from "rxjs";
import { packsModel } from "../packs.model";

export abstract class packsGateway {
  abstract getAllPacks(): Observable<Array<packsModel>>;
  abstract newPacks(packs: packsModel): Observable<object>
}
