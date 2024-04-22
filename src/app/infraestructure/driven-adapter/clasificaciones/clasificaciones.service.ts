import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { clasificacionModel } from '../../../domain/models/clasificaciones/clasificaciones.model';
import * as dataRaw from '../../data/clasificacion.json'
import { clasificacionGateway } from '../../../domain/models/clasificaciones/gateway/clasificaciones-gateway';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ClasificacionesService extends clasificacionGateway {

  private URL = environment.url

  override getAllClasificacion(): Observable<clasificacionModel[]> {
    return this.http.get<clasificacionModel[]>(`${this.URL}/clasificacion`)
  }

  /*
  override getAllClasificacion(): Observable<clasificacionModel[]> {
    const { data }: any = (dataRaw as any).default;
    return of(data);
  }
  */

  constructor(private http: HttpClient) { super(); }
}
