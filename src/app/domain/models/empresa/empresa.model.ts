export class empresaModel {
  empresa_id: string | number
  empresa_nombre: string
  empresa_estado: number

  constructor (
    empresa_id: string | number,
    empresa_nombre: string,
    empresa_estado: number
  ) {
    this.empresa_id = empresa_id,
    this.empresa_nombre = empresa_nombre,
    this.empresa_estado = empresa_estado
  }
}
