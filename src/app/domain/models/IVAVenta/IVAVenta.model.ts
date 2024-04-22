export class IVAVentaModel {
  IVAVenta_id: string | number
  IVAVenta_descripcion: string
  IVAVenta_estado: number

  constructor (
    IVAVenta_id: string | number,
    IVAVenta_descripcion: string,
    IVAVenta_estado: number
  ) {
    this.IVAVenta_descripcion = IVAVenta_descripcion,
    this.IVAVenta_estado = IVAVenta_estado,
    this.IVAVenta_id = IVAVenta_id
  }
}
