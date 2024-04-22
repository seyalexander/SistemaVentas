import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Observable, of } from 'rxjs';
import { paisesModel } from '../../../domain/models/paises/paises.model';
import { HttpClient } from '@angular/common/http';
import * as dataRaw from '../../data/paises.json'
import { PaisesGateway } from '../../../domain/models/paises/gateway/paises-gateway';

@Injectable({
  providedIn: 'root'
})
export class PaisesApiService extends PaisesGateway{

  private URL = environment.url

  // override getAllClientes(): Observable<clientesModel[]> {
  //   return this.http.get<clientesModel[]>(`${this.URL}/clientes`)
  // }

  override getAllPaises(): Observable<paisesModel[]> {
    const { data }: any = (dataRaw as any).default;
    return of(data);
  }

  constructor(private http: HttpClient) { super(); }
}
