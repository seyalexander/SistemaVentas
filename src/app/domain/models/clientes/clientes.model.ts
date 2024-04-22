import { paisesModel } from "../paises/paises.model";
import { tipoDocumentoModel } from "../tipoDocumento/tipoDocumento.model";

export class clientesModel {
  clientes_id: string | number
  clientes_razon_social: string
  clientes_telefono: string
  clientes_valorTipoDocumento: string
  clientes_estado: number
  clientes_direccion: string
  clientes_CPostal: string
  clientes_Poblacion: string
  clientes_provincias: string
  clientes_email: string
  clientes_ListaPaises: paisesModel;
  clientes_TipoDocumento_fk: tipoDocumentoModel;

  constructor(
    clientes_id: string | number,
    clientes_razon_social: string,
    clientes_telefono: string,
    clientes_valorDocumento: string,
    clientes_estado: number,
    clientes_direccion: string,
    clientes_CPostal: string,
    clientes_Poblacion: string,
    clientes_provincias: string,
    clientes_email: string,
    clientes_ListaPaises: paisesModel,
    clientes_TipoDocumento_fk: tipoDocumentoModel
  ) {
    this.clientes_id = clientes_id,
    this.clientes_razon_social = clientes_razon_social,
    this.clientes_telefono = clientes_telefono,
    this.clientes_valorTipoDocumento = clientes_valorDocumento,
    this.clientes_estado = clientes_estado,
    this.clientes_direccion = clientes_direccion,
    this.clientes_CPostal = clientes_CPostal,
    this.clientes_Poblacion = clientes_Poblacion,
    this.clientes_provincias = clientes_provincias,
    this.clientes_email = clientes_email,
    this.clientes_ListaPaises = clientes_ListaPaises,
    this.clientes_TipoDocumento_fk = clientes_TipoDocumento_fk
  }
}
