export class familiaProductosModel {
  familiaProductos_id: string | number
  familiaProductos_descripcion: string
  familiaProductos_estado: number
  familiaProductos_imagen: string
  familiaProductos_usuarioRegistro: string
  familiaProductos_fechaRegistro: string

  constructor (
    familiaProductos_id: string | number,
    familiaProductos_descripcion: string,
    familiaProductos_estado: number,
    familiaProductos_imagen: string,
    familiaProductos_usuarioRegistro: string,
    familiaProductos_fechaRegistro: string
  ) {
    this.familiaProductos_id = familiaProductos_id,
    this.familiaProductos_descripcion = familiaProductos_descripcion,
    this.familiaProductos_estado = familiaProductos_estado,
    this.familiaProductos_imagen = familiaProductos_imagen
    this.familiaProductos_usuarioRegistro = familiaProductos_usuarioRegistro
    this.familiaProductos_fechaRegistro = familiaProductos_fechaRegistro
  }

}
