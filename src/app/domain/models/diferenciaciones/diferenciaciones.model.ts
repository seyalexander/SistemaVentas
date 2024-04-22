export class diferenciacionesModel {
  diferenciaciones_id: string | number
  diferenciaciones_descripcion: string
  diferenciaciones_codigo: number
  diferenciaciones_codigoBarras: string = '';
  diferenciaciones_estado: number = 0;

  constructor (
    diferenciaciones_id: string | number,
    diferenciaciones_descripcion: string,
    diferenciaciones_codigo: number,
    diferenciaciones_codigoBarras: string,
    diferenciaciones_estado: number
  ) {
    this.diferenciaciones_id = diferenciaciones_id,
    this.diferenciaciones_descripcion = diferenciaciones_descripcion,
    this.diferenciaciones_codigo = diferenciaciones_codigo,
    this.diferenciaciones_codigoBarras = diferenciaciones_codigoBarras,
    this.diferenciaciones_estado = diferenciaciones_estado
  }
}
