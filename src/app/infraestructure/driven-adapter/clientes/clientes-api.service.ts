import { Injectable } from '@angular/core';
import { clientesGateway } from '../../../domain/models/clientes/gateway/clientes-gateway';
import { Observable, of } from 'rxjs';
import { clientesModel } from '../../../domain/models/clientes/clientes.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';
import * as dataRaw from '../../data/clientes.json'

@Injectable({
  providedIn: 'root'
})
export class ClientesApiService extends clientesGateway{

  private URL = environment.url

  // override getAllClientes(): Observable<clientesModel[]> {
  //   return this.http.get<clientesModel[]>(`${this.URL}/clientes`)
  // }

  override getAllClientes(): Observable<clientesModel[]> {
    const { data }: any = (dataRaw as any).default;
    return of(data);
  }

  constructor(private http: HttpClient) { super(); }
}
