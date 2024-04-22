export class IVACompraModel {
  IVACompra_id: string | number
  IVACompra_descripcion : string
  IVACompra_estado : number

  constructor (
    IVACompra_id: string | number,
    IVACompra_descripcion: string,
    IVACompra_estado: number
  ) {
    this.IVACompra_id = IVACompra_id,
    this.IVACompra_descripcion = IVACompra_descripcion,
    this.IVACompra_estado = IVACompra_estado
  }
}
