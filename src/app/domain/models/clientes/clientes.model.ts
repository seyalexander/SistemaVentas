import { paisesModel } from "../paises/paises.model";
import { tipoDocumentoModel } from "../tipoDocumento/tipoDocumento.model";

export class clientesModel {
  clientesModel_id: string | number = 0;
  clientesModel_razon_social: string = '';
  clientesModel_telefono: string = '';
  clientesModel_valorTipoDocumento: string = '';
  clientesModel_estado: number = 0;
  clientesModel_direccion: string = '';
  clientesModel_CPostal: string = '';
  clientesModel_Poblacion: string = '';
  clientesModel_provincias: string = '';
  clientesModel_email: string = '';
  clientesModel_ListaPaises: paisesModel = {} as paisesModel;
  clientesModel_TipoDocumento_fk: tipoDocumentoModel = {} as tipoDocumentoModel;
}
